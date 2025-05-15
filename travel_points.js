const travelPoints = [
  {
    "planet": "corellia",
    "name": "Coronet_Shuttle_B",
    "x": -329.77,
    "y": -4641.23,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Coronet_Shuttle_A",
    "x": -25.67,
    "y": -4409.78,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Coronet_Starport",
    "x": -66.76,
    "y": -4711.33,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Vreni_Island_Shuttle",
    "x": -5551.95,
    "y": -6059.97,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Tyrena_Shuttle_B",
    "x": -5600.64,
    "y": -2790.74,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Tyrena_Shuttle_A",
    "x": -5005.35,
    "y": -2386.98,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Tyrena_Starport",
    "x": -5003.06,
    "y": -2228.37,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Kor_Vella_Shuttleport",
    "x": -3775.25,
    "y": 3234.22,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Kor_Vella_Starport",
    "x": -3157.28,
    "y": 2876.2,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Doaba_Guerfel_Shuttleport",
    "x": 3085.5,
    "y": 4993.01,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Doaba_Guerfel_Starport",
    "x": 3349.89,
    "y": 5598.14,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Bela_Vistal_Shuttleport_A",
    "x": 6644.27,
    "y": -5922.52,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "corellia",
    "name": "Bela_Vistal_Shuttleport_B",
    "x": 6930.8,
    "y": -5534.89,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "dantooine",
    "name": "Dantooine_Mining_Outpost",
    "x": -637.0,
    "y": 2504.4,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "dantooine",
    "name": "Dantooine_Imperial_Outpost",
    "x": -4208.66,
    "y": -2350.24,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "dantooine",
    "name": "Dantooine_Agro_Outpost",
    "x": 1569.66,
    "y": -6415.76,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "dantooine",
    "name": "Abandoned_Rebel_Base",
    "x": -6799.6,
    "y": 5574.3,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": false
  },
  {
    "planet": "dathomir",
    "name": "Trade_Outpost",
    "x": 618.89,
    "y": 3092.01,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "dathomir",
    "name": "Science_Outpost",
    "x": -49.02,
    "y": -1584.73,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "endor",
    "name": "Smuggler_Outpost",
    "x": -950.59,
    "y": 1553.41,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "endor",
    "name": "Research_Outpost",
    "x": 3201.66,
    "y": -3499.76,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "lok",
    "name": "Nym's_Stronghold",
    "x": 478.93,
    "y": 5511.96,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Keren_Starport",
    "x": 1371.59,
    "y": 2747.9,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Keren_Shuttleport_South",
    "x": 1567.52,
    "y": 2837.88,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Keren_Shuttleport",
    "x": 2021.0,
    "y": 2525.68,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Theed_Shuttle_A",
    "x": -5856.11,
    "y": 4172.16,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Theed_Shuttle_B",
    "x": -5005.0,
    "y": 4072.0,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Theed_Shuttle_C",
    "x": -5411.02,
    "y": 4322.33,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Theed_Spaceport",
    "x": -4858.83,
    "y": 4164.07,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "The_Lake_Retreat",
    "x": -5494.42,
    "y": -21.84,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Moenia",
    "x": 4731.17,
    "y": -4677.54,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Moenia_Shuttleport",
    "x": 4961.94,
    "y": -4892.7,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Deeja_Peak_Shuttleport",
    "x": 5331.94,
    "y": -1576.67,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Kaadara_Starport",
    "x": 5280.2,
    "y": 6688.05,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Kaadara_Shuttleport",
    "x": 5123.39,
    "y": 6616.03,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "naboo",
    "name": "Emperors_Retreat",
    "x": 2442.8,
    "y": -3916.8,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": false
  },
  {
    "planet": "rori",
    "name": "Restuss_Starport",
    "x": 5340.0,
    "y": 5734.0,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "rori",
    "name": "Restuss_Shuttleport",
    "x": 5211.0,
    "y": 5791.0,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "rori",
    "name": "Narmle_Starport",
    "x": -5374.07,
    "y": -2188.61,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "rori",
    "name": "Narmle_Shuttleport",
    "x": -5255.41,
    "y": -2161.63,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "rori",
    "name": "Rebel_Outpost",
    "x": 3691.9,
    "y": -6403.44,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "talus",
    "name": "Dearic_Starport",
    "x": 263.58,
    "y": -2952.13,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "talus",
    "name": "Dearic_Shuttleport",
    "x": 699.3,
    "y": -3041.42,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "talus",
    "name": "Talus_Imperial_Outpost",
    "x": -2227.4,
    "y": 2319.9,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "talus",
    "name": "Nashal_Shuttleport",
    "x": 4334.58,
    "y": 5431.04,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "talus",
    "name": "Nashal_Starport",
    "x": 4453.72,
    "y": 5354.33,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Eisley_Shuttleport",
    "x": 3416.69,
    "y": -4648.14,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Eisley_Starport",
    "x": 3599.89,
    "y": -4780.45,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Bestine_Starport",
    "x": -1361.19,
    "y": -3600.03,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Bestine_Shuttleport",
    "x": -1098.48,
    "y": -3563.53,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Espa_Shuttleport_South",
    "x": -2897.09,
    "y": 1933.41,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Espa_Shuttleport_West",
    "x": -3112.13,
    "y": 2176.96,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Espa_Starport",
    "x": -2833.16,
    "y": 2107.38,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Espa_Shuttleport_East",
    "x": -2803.51,
    "y": 2182.96,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Anchorhead_Shuttleport",
    "x": 47.57,
    "y": -5338.91,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Entha_Spaceport",
    "x": 1266.1,
    "y": 3065.14,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Entha_Shuttle_B",
    "x": 1395.45,
    "y": 3467.01,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Mos_Entha_Shuttle_A",
    "x": 1730.88,
    "y": 3184.61,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": true
  },
  {
    "planet": "tatooine",
    "name": "Jabbas_Palace",
    "x": -6171.6,
    "y": -6381.5,
    "interplanetaryTravelAllowed": false,
    "incomingTravelAllowed": false
  },
  {
    "planet": "yavin4",
    "name": "Yavin_IV_Labor_Outpost",
    "x": -6921.67,
    "y": -5726.52,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "yavin4",
    "name": "Yavin_IV_Mining_Outpost",
    "x": -267.24,
    "y": 4896.3,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": true
  },
  {
    "planet": "yavin4",
    "name": "Yavin_IV_Imperial_Outpost",
    "x": 4054.1,
    "y": -6216.9,
    "interplanetaryTravelAllowed": true,
    "incomingTravelAllowed": false
  }
];