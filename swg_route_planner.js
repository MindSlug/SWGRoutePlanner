// Planet topology for route calculations
const planetGraph = {
    corellia: ["dantooine","talus","dathomir","yavin4","endor","naboo","tatooine"],
    naboo:     ["corellia","rori","tatooine","lok"],
    tatooine:  ["corellia","naboo","lok"],
    dantooine: ["corellia"],
    talus:     ["corellia"],
    dathomir:  ["corellia"],
    yavin4:    ["corellia"],
    endor:     ["corellia"],
    rori:      ["naboo"],
    lok:       ["tatooine","naboo"]
};

// Populate dropdowns…
function populateSelects() {
    const planets = [...new Set(travelPoints.map(p => p.planet))];
    ["fromPlanet","toPlanet"].forEach(id => {
        const sel = document.getElementById(id);
        planets.forEach(p => sel.appendChild(new Option(p, p)));
    });
    updatePorts("fromPlanet","fromPort", true);
    updatePorts("toPlanet","toPort",   false);
}

function updatePorts(planetId, portId, showAll) {
    const sel = document.getElementById(portId);
    sel.innerHTML = "";
    travelPoints
        .filter(p => p.planet === document.getElementById(planetId).value)
        .filter(p => showAll || p.incomingTravelAllowed)
        .forEach(p => sel.appendChild(new Option(p.name, p.name)));
}

document.addEventListener("DOMContentLoaded", () => {
    populateSelects();
    document.getElementById("fromPlanet")
        .addEventListener("change", () => updatePorts("fromPlanet","fromPort", true));
    document.getElementById("toPlanet")
        .addEventListener("change",   () => updatePorts("toPlanet",  "toPort",   false));
});

// Default IP‐departure port
function getDefaultIP(planet) {
    return travelPoints.find(p => p.planet===planet && p.interplanetaryTravelAllowed);
}
// Default IP‐arrival port
function getDefaultIPArr(planet) {
    return travelPoints.find(p =>
        p.planet===planet &&
        p.interplanetaryTravelAllowed &&
        p.incomingTravelAllowed
    );
}

// BFS for planet graph
function findPlanetRoute(start, end) {
    const queue = [[start]], seen = new Set();
    while (queue.length) {
        const path = queue.shift();
        const cur  = path[path.length-1];
        if (cur===end) return path;
        if (seen.has(cur)) continue;
        seen.add(cur);
        (planetGraph[cur]||[]).forEach(nbr => {
            if (!seen.has(nbr)) queue.push([...path, nbr]);
        });
    }
    return null;
}

// MAIN: build route commands
function generateRouteCommands(fromPlanet, fromPort, toPlanet, toPort) {
    const start = travelPoints.find(p => p.planet===fromPlanet && p.name===fromPort);
    const end   = travelPoints.find(p => p.planet===toPlanet   && p.name===toPort);
    if (!start || !end)
        return ["Invalid ports selected."];
    if (!end.incomingTravelAllowed)
        return ["Destination blocks incoming travel."];

    // === SAME‐PLANET QUICK HOP ===
    if (fromPlanet === toPlanet) {
        return [`/purchaseTicket ${fromPlanet} ${fromPort} ${toPlanet} ${toPort} single;`];
    }

    const route = findPlanetRoute(fromPlanet, toPlanet);
    if (!route)
        return ["No valid route found."];

    const cmds = [];
    let current = start;

    // 1) If start isn’t interplanetary → hop to default IP port
    if (!current.interplanetaryTravelAllowed) {
        const ip = getDefaultIP(fromPlanet);
        if (!ip) return [`No interplanetary port on ${fromPlanet}`];
        cmds.push(`/purchaseTicket ${fromPlanet} ${current.name} ${fromPlanet} ${ip.name} single;`);
        current = ip;
    }

    // 2) DIRECT‐NEIGHBOR HOP
    if (route.length === 2) {
        if (end.interplanetaryTravelAllowed) {
            cmds.push(`/purchaseTicket ${fromPlanet} ${current.name} ${toPlanet} ${end.name} single;`);
        } else {
            const ipArr = getDefaultIPArr(toPlanet);
            if (!ipArr) return [`No interplanetary arrival on ${toPlanet}`];
            cmds.push(`/purchaseTicket ${fromPlanet} ${current.name} ${toPlanet} ${ipArr.name} single;`);
            cmds.push(`/purchaseTicket ${toPlanet} ${ipArr.name} ${toPlanet} ${end.name} single;`);
        }
        return cmds;
    }

    // 3) MULTI‐LEG HOPS
    for (let i = 1; i < route.length; i++) {
        const prev = route[i-1], next = route[i];

        // departure is always 'current' (an IP port)
        const depart = current;

        // choose arrival
        let arrive;
        if (i < route.length-1) {
            arrive = getDefaultIPArr(next);
            if (!arrive) return [`No interplanetary arrival on ${next}`];
        } else {
            // final planet: land at your chosen port if it’s IP, otherwise IP then local
            if (end.interplanetaryTravelAllowed) {
                arrive = end;
            } else {
                arrive = getDefaultIPArr(next);
                if (!arrive) return [`No interplanetary arrival on ${next}`];
            }
        }

        cmds.push(`/purchaseTicket ${prev} ${depart.name} ${next} ${arrive.name} single;`);
        current = arrive;
    }

    // 4) LOCAL FINAL HOP (when end isn’t IP)
    if (!end.interplanetaryTravelAllowed) {
        cmds.push(`/purchaseTicket ${toPlanet} ${current.name} ${toPlanet} ${end.name} single;`);
    }

    return cmds;
}

// Render + copy
function planRoute() {
    const fp  = document.getElementById("fromPlanet").value;
    const fpt = document.getElementById("fromPort").value;
    const tp  = document.getElementById("toPlanet").value;
    const tpt = document.getElementById("toPort").value;
    const out = document.getElementById("output");

    const cmds = generateRouteCommands(fp, fpt, tp, tpt);
    out.textContent = cmds.join("\n");

    out.style.height = "auto";
    out.style.height = out.scrollHeight + "px";
}

function copyCommands() {
    const txt = document.getElementById("output").value.trim();
    navigator.clipboard.writeText(txt)
        .then(() => alert("Commands copied!"));
}
