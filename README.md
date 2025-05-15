# SWG Route Planner

**Version:** v1.06  
**Author:** MindSlug (2025)  
**Live Demo:** https://swg.mindslug.com/planner

---

## Overview

The **SWG Route Planner** is a static, client-side web app for planning planetary travel routes in SWGEmu (Star Wars Galaxies). It computes the shortest sequence of `/purchaseTicket` commands between any two shuttle/starport locations.

---

## Features

- **Pure JavaScript**: All logic runs in the browser; no backend or API calls.
- **Dynamic Routing**: Automatically handles both interplanetary hops and same-planet hops.
- **Copy to Clipboard**: One-click to copy the generated commands.
- **Dark Mode UI** with responsive layout.

---

## Install & Run Locally

1. **Clone** or **Download** this repository:

   ```bash
   git clone https://github.com/MindSlug/SWGRoutePlanner.git
   ```

2. **Serve** the files from any static host (GitHub Pages, Netlify, Apache, etc.),  
   or simply open `index.html` in your browser.
3. Ensure that `travel_points.js`, `swg_route_planner.js`, and `index.html` remain in the same folder.

---

## Usage

1. **Open** the planner in your browser.
2. **Select**:
    - **From Planet** & **From Port**
    - **To Planet** & **To Port**
3. Click **Generate Route**.
4. The `/purchaseTicket` commands appear in the **Route Commands** box.
5. Click **Copy to Clipboard** to copy all commands for pasting in-game.

---

## Project Structure

```text
/
├── index.html
├── travel_points.js       # all ports / add player cities here
├── swg_route_planner.js   # routing logic & UI interactions
└── README.md
```

---

## License

This tool is provided under the MIT License.  
© MindSlug 2025