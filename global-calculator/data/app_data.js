const APP_DATA = [
  {
    "name": "NEW YORK",
    "currency": "USD",
    "region": "Americas",
    "profiles": [
      {
        "name": "Manhattan (Estudio Privado)",
        "costs": {
          "housing": 2800,
          "food": 900,
          "transport": 130,
          "health": 350,
          "leisure": 500,
          "tuition": 0
        },
        "totalMonth": 4680,
        "totalMonthUSD": 4680
      },
      {
        "name": "Brooklyn / Williamsburg",
        "costs": {
          "housing": 2100,
          "food": 700,
          "transport": 130,
          "health": 300,
          "leisure": 400,
          "tuition": 0
        },
        "totalMonth": 3630,
        "totalMonthUSD": 3630
      },
      {
        "name": "Queens / NJ (Compartido)",
        "costs": {
          "housing": 1200,
          "food": 550,
          "transport": 160,
          "health": 250,
          "leisure": 300,
          "tuition": 0
        },
        "totalMonth": 2460,
        "totalMonthUSD": 2460
      }
    ]
  },
  {
    "name": "CAMBRIDGE",
    "currency": "USD",
    "region": "Americas",
    "profiles": [
      {
        "name": "Escenario 1: On-Campus (Residencial)",
        "costs": {
          "housing": 1400,
          "food": 800,
          "transport": 50,
          "health": 300,
          "leisure": 400,
          "tuition": 0
        },
        "totalMonth": 2950,
        "totalMonthUSD": 2950
      },
      {
        "name": "Escenario 2: Off-Campus (Compartido/Austero)",
        "costs": {
          "housing": 1100,
          "food": 500,
          "transport": 90,
          "health": 250,
          "leisure": 350,
          "tuition": 0
        },
        "totalMonth": 2290,
        "totalMonthUSD": 2290
      },
      {
        "name": "Escenario 3: Off-Campus (Independiente)",
        "costs": {
          "housing": 1900,
          "food": 750,
          "transport": 90,
          "health": 300,
          "leisure": 600,
          "tuition": 0
        },
        "totalMonth": 3640,
        "totalMonthUSD": 3640
      }
    ]
  },
  {
    "name": "LOS ANGELES",
    "currency": "USD",
    "region": "Americas",
    "profiles": [
      {
        "name": "Presupuesto Estándar (Westwood/USC Area)",
        "costs": {
          "housing": 1800,
          "food": 650,
          "transport": 350,
          "health": 250,
          "leisure": 400,
          "tuition": 0
        },
        "totalMonth": 3450,
        "totalMonthUSD": 3450
      }
    ]
  },
  {
    "name": "CHICAGO",
    "currency": "USD",
    "region": "Americas",
    "profiles": [
      {
        "name": "UChicago (Privada Élite)",
        "costs": {
          "housing": 1400,
          "food": 483,
          "transport": 33,
          "health": 467,
          "leisure": 400,
          "tuition": 6725
        },
        "totalMonth": 9508,
        "totalMonthUSD": 9508
      },
      {
        "name": "DePaul (Privada Urbana)",
        "costs": {
          "housing": 1600,
          "food": 517,
          "transport": 33,
          "health": 267,
          "leisure": 400,
          "tuition": 4208
        },
        "totalMonth": 7025,
        "totalMonthUSD": 7025
      },
      {
        "name": "UIC (Pública - Residente)*",
        "costs": {
          "housing": 1200,
          "food": 450,
          "transport": 33,
          "health": 125,
          "leisure": 400,
          "tuition": 1583
        },
        "totalMonth": 3792,
        "totalMonthUSD": 3792
      },
      {
        "name": "Loyola (Privada Católica)",
        "costs": {
          "housing": 1250,
          "food": 483,
          "transport": 33,
          "health": 333,
          "leisure": 400,
          "tuition": 4958
        },
        "totalMonth": 7458,
        "totalMonthUSD": 7458
      }
    ]
  },
  {
    "name": "SAN FRANCISCO",
    "currency": "USD",
    "region": "Americas",
    "profiles": [
      {
        "name": "Costo Mensual Estimado",
        "costs": {
          "housing": 2100,
          "food": 550,
          "transport": 150,
          "health": 350,
          "leisure": 450,
          "tuition": 0
        },
        "totalMonth": 3600,
        "totalMonthUSD": 3600
      }
    ]
  },
  {
    "name": "DURHAM",
    "currency": "USD",
    "region": "Americas",
    "profiles": [
      {
        "name": "Costo Mensual Est. (NCA)",
        "costs": {
          "housing": 900,
          "food": 450,
          "transport": 150,
          "health": 250,
          "leisure": 250,
          "tuition": 0
        },
        "totalMonth": 2000,
        "totalMonthUSD": 2000
      }
    ]
  },
  {
    "name": "MADRID",
    "currency": "EUR",
    "region": "Europe",
    "profiles": [
      {
        "name": "Rango Económico (Getafe/Leganés)",
        "costs": {
          "housing": 475,
          "food": 225,
          "transport": 10,
          "health": 53,
          "leisure": 150,
          "tuition": 0
        },
        "totalMonth": 913,
        "totalMonthUSD": 986
      },
      {
        "name": "Rango Centro (Moncloa/Chamberí/Salamanca)",
        "costs": {
          "housing": 801,
          "food": 275,
          "transport": 10,
          "health": 53,
          "leisure": 250,
          "tuition": 0
        },
        "totalMonth": 1389,
        "totalMonthUSD": 1500
      }
    ]
  },
  {
    "name": "BARCELONA",
    "currency": "EUR",
    "region": "Europe",
    "profiles": [
      {
        "name": "Rango Low Cost (Ahorrador)",
        "costs": {
          "housing": 515,
          "food": 220,
          "transport": 16,
          "health": 0,
          "leisure": 220,
          "tuition": 0
        },
        "totalMonth": 971,
        "totalMonthUSD": 1049
      },
      {
        "name": "Rango Estándar (Medio)",
        "costs": {
          "housing": 725,
          "food": 320,
          "transport": 16,
          "health": 0,
          "leisure": 390,
          "tuition": 0
        },
        "totalMonth": 1451,
        "totalMonthUSD": 1567
      },
      {
        "name": "Rango Premium / Confort",
        "costs": {
          "housing": 451,
          "food": 450,
          "transport": 60,
          "health": 0,
          "leisure": 700,
          "tuition": 0
        },
        "totalMonth": 1661,
        "totalMonthUSD": 1794
      }
    ]
  },
  {
    "name": "BERLIN",
    "currency": "EUR",
    "region": "Europe",
    "profiles": [
      {
        "name": "Presupuesto Austero (Supervivencia)",
        "costs": {
          "housing": 550,
          "food": 200,
          "transport": 0,
          "health": 135,
          "leisure": 130,
          "tuition": 0
        },
        "totalMonth": 1015,
        "totalMonthUSD": 1096
      },
      {
        "name": "Presupuesto Cómodo (Estándar)",
        "costs": {
          "housing": 426,
          "food": 350,
          "transport": 0,
          "health": 145,
          "leisure": 300,
          "tuition": 0
        },
        "totalMonth": 1221,
        "totalMonthUSD": 1318
      }
    ]
  },
  {
    "name": "AMSTERDAM",
    "currency": "EUR",
    "region": "Europe",
    "profiles": [
      {
        "name": "Rango Bajo (Austeridad)",
        "costs": {
          "housing": 750,
          "food": 300,
          "transport": 40,
          "health": 70,
          "leisure": 230,
          "tuition": 1500
        },
        "totalMonth": 2890,
        "totalMonthUSD": 3121
      },
      {
        "name": "Rango Medio (Estándar)",
        "costs": {
          "housing": 1,
          "food": 400,
          "transport": 120,
          "health": 165,
          "leisure": 370,
          "tuition": 1800
        },
        "totalMonth": 2856,
        "totalMonthUSD": 3085
      },
      {
        "name": "Rango Alto (Confort)",
        "costs": {
          "housing": 2,
          "food": 550,
          "transport": 250,
          "health": 180,
          "leisure": 575,
          "tuition": 2500
        },
        "totalMonth": 4057,
        "totalMonthUSD": 4381
      }
    ]
  },
  {
    "name": "DUBLIN",
    "currency": "EUR",
    "region": "Europe",
    "profiles": [
      {
        "name": "Económico (Compartido)",
        "costs": {
          "housing": 850,
          "food": 250,
          "transport": 45,
          "health": 25,
          "leisure": 285,
          "tuition": 0
        },
        "totalMonth": 1455,
        "totalMonthUSD": 1571
      },
      {
        "name": "Medio (Estándar)",
        "costs": {
          "housing": 1100,
          "food": 350,
          "transport": 65,
          "health": 45,
          "leisure": 500,
          "tuition": 0
        },
        "totalMonth": 2060,
        "totalMonthUSD": 2225
      },
      {
        "name": "Premium (Privado)",
        "costs": {
          "housing": 2,
          "food": 500,
          "transport": 100,
          "health": 70,
          "leisure": 860,
          "tuition": 0
        },
        "totalMonth": 1532,
        "totalMonthUSD": 1654
      }
    ]
  },
  {
    "name": "VIENA",
    "currency": "EUR",
    "region": "Europe",
    "profiles": [
      {
        "name": "Perfil Austero (Min)",
        "costs": {
          "housing": 380,
          "food": 220,
          "transport": 25,
          "health": 78,
          "leisure": 130,
          "tuition": 0
        },
        "totalMonth": 833,
        "totalMonthUSD": 900
      },
      {
        "name": "Perfil Estándar (Avg)",
        "costs": {
          "housing": 580,
          "food": 350,
          "transport": 25,
          "health": 78,
          "leisure": 290,
          "tuition": 0
        },
        "totalMonth": 1323,
        "totalMonthUSD": 1429
      },
      {
        "name": "Perfil Confort (Max)",
        "costs": {
          "housing": 880,
          "food": 500,
          "transport": 50,
          "health": 160,
          "leisure": 570,
          "tuition": 0
        },
        "totalMonth": 2160,
        "totalMonthUSD": 2333
      }
    ]
  },
  {
    "name": "LISBOA",
    "currency": "EUR",
    "region": "Europe",
    "profiles": [
      {
        "name": "Orçamento Económico (Quarto Partilhado, Cantina)",
        "costs": {
          "housing": 0,
          "food": 200,
          "transport": 12,
          "health": 10,
          "leisure": 20,
          "tuition": 0
        },
        "totalMonth": 241,
        "totalMonthUSD": 260
      },
      {
        "name": "Orçamento Moderado (Quarto Privado/Residência, Cozinha Própria)",
        "costs": {
          "housing": 0,
          "food": 275,
          "transport": 20,
          "health": 33,
          "leisure": 100,
          "tuition": 0
        },
        "totalMonth": 428,
        "totalMonthUSD": 462
      },
      {
        "name": "Orçamento Conforto (Estúdio, Jantar Fora Frequentemente)",
        "costs": {
          "housing": 0,
          "food": 400,
          "transport": 45,
          "health": 65,
          "leisure": 160,
          "tuition": 0
        },
        "totalMonth": 670,
        "totalMonthUSD": 724
      }
    ]
  },
  {
    "name": "ZURICH",
    "currency": "CHF",
    "region": "Europe",
    "profiles": [
      {
        "name": "Perfil Austero (CHF)",
        "costs": {
          "housing": 750,
          "food": 350,
          "transport": 65,
          "health": 110,
          "leisure": 290,
          "tuition": 0
        },
        "totalMonth": 1565,
        "totalMonthUSD": 1737
      },
      {
        "name": "Perfil Moderado (CHF)",
        "costs": {
          "housing": 1175,
          "food": 550,
          "transport": 95,
          "health": 320,
          "leisure": 740,
          "tuition": 0
        },
        "totalMonth": 2880,
        "totalMonthUSD": 3197
      },
      {
        "name": "Perfil Confort (CHF)",
        "costs": {
          "housing": 2050,
          "food": 850,
          "transport": 150,
          "health": 490,
          "leisure": 1450,
          "tuition": 0
        },
        "totalMonth": 4990,
        "totalMonthUSD": 5539
      }
    ]
  },
  {
    "name": "LONDRES",
    "currency": "GBP",
    "region": "Europe",
    "profiles": [
      {
        "name": "Costo Mensual (Estimado)",
        "costs": {
          "housing": 1100,
          "food": 215,
          "transport": 120,
          "health": 0,
          "leisure": 390,
          "tuition": 0
        },
        "totalMonth": 1825,
        "totalMonthUSD": 2300
      }
    ]
  },
  {
    "name": "BEIJIN",
    "currency": "CNY",
    "region": "Asia-Pac",
    "profiles": [
      {
        "name": "Perfil Austero (Becario/Dormitorio)",
        "costs": {
          "housing": 1850,
          "food": 1050,
          "transport": 125,
          "health": 70,
          "leisure": 400,
          "tuition": 0
        },
        "totalMonth": 3495,
        "totalMonthUSD": 489
      },
      {
        "name": "Perfil Estándar (Piso Compartido)",
        "costs": {
          "housing": 4500,
          "food": 600,
          "transport": 275,
          "health": 70,
          "leisure": 1250,
          "tuition": 0
        },
        "totalMonth": 6695,
        "totalMonthUSD": 937
      },
      {
        "name": "Perfil Premium (Apartamento Privado)",
        "costs": {
          "housing": 11250,
          "food": 0,
          "transport": 200,
          "health": 70,
          "leisure": 3000,
          "tuition": 0
        },
        "totalMonth": 14520,
        "totalMonthUSD": 2033
      }
    ]
  },
  {
    "name": "MONTERREY",
    "currency": "MXN",
    "region": "Americas",
    "profiles": [
      {
        "name": "Perfil Austero (UANL / Público)",
        "costs": {
          "housing": 6000,
          "food": 4700,
          "transport": 1200,
          "health": 800,
          "leisure": 2500,
          "tuition": 0
        },
        "totalMonth": 15200,
        "totalMonthUSD": 890
      },
      {
        "name": "Perfil Medio (Tec/UDEM Compartido)",
        "costs": {
          "housing": 9500,
          "food": 7000,
          "transport": 2500,
          "health": 1300,
          "leisure": 4500,
          "tuition": 0
        },
        "totalMonth": 24800,
        "totalMonthUSD": 1450
      },
      {
        "name": "Perfil Alto (Tec/UDEM Privado)",
        "costs": {
          "housing": 16000,
          "food": 10500,
          "transport": 4500,
          "health": 2500,
          "leisure": 9000,
          "tuition": 0
        },
        "totalMonth": 42500,
        "totalMonthUSD": 2500
      }
    ]
  },
  {
    "name": "ISTANBUL",
    "currency": "USD",
    "region": "Europe",
    "profiles": [
      {
        "name": "Perfil Austeridad Estratégica",
        "costs": {
          "housing": 200,
          "food": 180,
          "transport": 20,
          "health": 35,
          "leisure": 110,
          "tuition": 0
        },
        "totalMonth": 545,
        "totalMonthUSD": 545
      },
      {
        "name": "Perfil Estándar Confortable",
        "costs": {
          "housing": 625,
          "food": 350,
          "transport": 40,
          "health": 35,
          "leisure": 330,
          "tuition": 0
        },
        "totalMonth": 1380,
        "totalMonthUSD": 1380
      },
      {
        "name": "Perfil Premium / Expat",
        "costs": {
          "housing": 1250,
          "food": 600,
          "transport": 150,
          "health": 120,
          "leisure": 750,
          "tuition": 0
        },
        "totalMonth": 2870,
        "totalMonthUSD": 2870
      }
    ]
  },
  {
    "name": "TOKYO",
    "currency": "JPY",
    "region": "Asia-Pac",
    "profiles": [
      {
        "name": "Costo Estimado (JPY)",
        "costs": {
          "housing": 92500,
          "food": 70000,
          "transport": 6500,
          "health": 2000,
          "leisure": 29000,
          "tuition": 0
        },
        "totalMonth": 200000,
        "totalMonthUSD": 1320
      }
    ]
  },
  {
    "name": "SYDNEY",
    "currency": "AUD",
    "region": "Asia-Pac",
    "profiles": [
      {
        "name": "Profile 3",
        "costs": {
          "housing": 1950,
          "food": 867,
          "transport": 216,
          "health": 230,
          "leisure": 818,
          "tuition": 0
        },
        "totalMonth": 4080,
        "totalMonthUSD": 2652
      }
    ]
  },
  {
    "name": "AUCKLAND",
    "currency": "NZD",
    "region": "Asia-Pac",
    "profiles": [
      {
        "name": "Perfil Ahorrador (NZD)",
        "costs": {
          "housing": 1061,
          "food": 563,
          "transport": 108,
          "health": 78,
          "leisure": 173,
          "tuition": 0
        },
        "totalMonth": 1983,
        "totalMonthUSD": 1190
      },
      {
        "name": "Perfil Medio (NZD)",
        "costs": {
          "housing": 1516,
          "food": 909,
          "transport": 173,
          "health": 78,
          "leisure": 281,
          "tuition": 0
        },
        "totalMonth": 2957,
        "totalMonthUSD": 1774
      },
      {
        "name": "Perfil Confort (NZD)",
        "costs": {
          "housing": 2446,
          "food": 1386,
          "transport": 260,
          "health": 78,
          "leisure": 217,
          "tuition": 0
        },
        "totalMonth": 4386,
        "totalMonthUSD": 2632
      }
    ]
  },
  {
    "name": "RIYADH",
    "currency": "SAR",
    "region": "MEA",
    "profiles": [
      {
        "name": "Escenario A: Becario (Universidad Pública - KSU/PNU)",
        "costs": {
          "housing": 0,
          "food": 646,
          "transport": 84,
          "health": 0,
          "leisure": 483,
          "tuition": 4
        },
        "totalMonth": 1218,
        "totalMonthUSD": 329
      },
      {
        "name": "Escenario B: Autofinanciado (Universidad Privada - Alfaisal/PSU)",
        "costs": {
          "housing": 4375,
          "food": 1417,
          "transport": 563,
          "health": 354,
          "leisure": 1708,
          "tuition": 8292
        },
        "totalMonth": 16708,
        "totalMonthUSD": 4511
      }
    ]
  },
  {
    "name": "RIO DE JANEIRO",
    "currency": "BRL",
    "region": "Americas",
    "profiles": [
      {
        "name": "Costo Estándar (Zona Norte/Centro)",
        "costs": {
          "housing": 401,
          "food": 800,
          "transport": 820,
          "health": 0,
          "leisure": 250,
          "tuition": 0
        },
        "totalMonth": 2271,
        "totalMonthUSD": 454
      },
      {
        "name": "Costo Premium (Zona Sur)",
        "costs": {
          "housing": 2,
          "food": 1,
          "transport": 820,
          "health": 0,
          "leisure": 450,
          "tuition": 0
        },
        "totalMonth": 1274,
        "totalMonthUSD": 255
      }
    ]
  }
];