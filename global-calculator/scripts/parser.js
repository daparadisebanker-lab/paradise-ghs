const fs = require('fs');
const path = require('path');

const csvPath = path.resolve('c:/Users/USER/Desktop/GHS/Global Calulator (3).xlsx - Costo x Ciudad .csv');
const rawStr = fs.readFileSync(csvPath, 'utf8');

function parseLine(line) {
  let result = [];
  let current = '';
  let inQuotes = false;
  for(let i=0; i<line.length; i++) {
     if(line[i] === '"') inQuotes = !inQuotes;
     else if(line[i] === ',' && !inQuotes) {
       result.push(current.trim());
       current = '';
     } else {
       current += line[i];
     }
  }
  result.push(current.trim());
  return result;
}

const lines = rawStr.split('\n').map(parseLine);
const cities = [];

const cityCurrencyMap = {
  'NEW YORK': 'USD', 'CAMBRIDGE': 'USD', 'LOS ANGELES': 'USD', 'CHICAGO': 'USD', 'SAN FRANCISCO': 'USD', 'DURHAM': 'USD',
  'PARIS': 'EUR', 'MADRID': 'EUR', 'BARCELONA': 'EUR', 'BERLIN': 'EUR', 'AMSTERDAM': 'EUR', 'MILAN': 'EUR', 'DUBLIN': 'EUR', 'VIENA': 'EUR', 'LISBOA': 'EUR',
  'ZURICH': 'CHF', 'LONDRES': 'GBP', 'BEIJIN': 'CNY', 'CAPETOWN': 'ZAR', 'MONTERREY': 'MXN', 'ISTANBUL': 'USD', 'TOKYO': 'JPY', 'SYDNEY': 'AUD', 'AUCKLAND': 'NZD', 'RIYADH': 'SAR', 'RIO DE JANEIRO': 'BRL'
};

const cityRegionMap = {
  'NEW YORK': 'Americas', 'CAMBRIDGE': 'Americas', 'LOS ANGELES': 'Americas', 'CHICAGO': 'Americas', 'SAN FRANCISCO': 'Americas', 'DURHAM': 'Americas', 'MONTERREY': 'Americas', 'RIO DE JANEIRO': 'Americas', 'TORONTO': 'Americas',
  'PARIS': 'Europe', 'MADRID': 'Europe', 'BARCELONA': 'Europe', 'BERLIN': 'Europe', 'AMSTERDAM': 'Europe', 'MILAN': 'Europe', 'DUBLIN': 'Europe', 'VIENA': 'Europe', 'LISBOA': 'Europe', 'ZURICH': 'Europe', 'LONDRES': 'Europe', 'ISTANBUL': 'Europe',
  'BEIJIN': 'Asia-Pac', 'TOKYO': 'Asia-Pac', 'SYDNEY': 'Asia-Pac', 'AUCKLAND': 'Asia-Pac',
  'RIYADH': 'MEA', 'CAPETOWN': 'MEA'
};

const exchangeRates = {
  'USD': 1, 'EUR': 1.08, 'GBP': 1.26, 'JPY': 0.0066, 'CNY': 0.14, 'MXN': 0.059, 'SAR': 0.27, 'BRL': 0.20, 'CHF': 1.11, 'AUD': 0.65, 'NZD': 0.60, 'ZAR': 0.054
};

const cityConfig = {
  'NEW YORK': { mult: 1/12, cols: [2,3,4,5] },
  'CAMBRIDGE': { mult: 1/9, cols: [2,3,4] }, 
  'LOS ANGELES': { mult: 1, cols: [2] }, 
  'CHICAGO': { mult: 1/12, cols: [2,3,4,5] }, 
  'SAN FRANCISCO': { mult: 1/12, cols: [2] }, 
  'DURHAM': { mult: 1, cols: [2] }, 
  'MADRID': { mult: 1, cols: [2,3] }, 
  'BARCELONA': { mult: 1, cols: [2,3,4] }, 
  'BERLIN': { mult: 1, cols: [2,3] }, 
  'AMSTERDAM': { mult: 1, cols: [3,4,5] }, 
  'DUBLIN': { mult: 1, cols: [2,3,4] }, 
  'VIENA': { mult: 1, cols: [3,4,5] }, 
  'LISBOA': { mult: 1, cols: [2,3,4] }, 
  'ZURICH': { mult: 1, cols: [2,3,4] }, 
  'LONDRES': { mult: 1, cols: [2] }, 
  'BEIJIN': { mult: 1, cols: [3,4,5] }, 
  'MONTERREY': { mult: 1, cols: [2,3,4] }, 
  'ISTANBUL': { mult: 1, cols: [2,3,4] }, 
  'TOKYO': { mult: 1, cols: [2] }, 
  'SYDNEY': { mult: 1, cols: [3] }, 
  'AUCKLAND': { mult: 4.33, cols: [2,3,4] }, 
  'RIYADH': { mult: 1/12, cols: [2,3] }, 
  'RIO DE JANEIRO': { mult: 1, cols: [3,4] } 
};

const parseCost = (str) => {
    if (!str || str === 'N/A' || str === '--' || str.toLowerCase().includes('incluido')) return 0;
    const cleanStr = str.replace(/,/g, ''); 
    const matches = cleanStr.match(/\d+(\.\d+)?/g);
    if (!matches) return 0;
    const nums = matches.map(Number);
    if (nums.length === 1) return nums[0];
    return (nums[0] + nums[1]) / 2;
}

let currentCity = null;

for (let i = 0; i < lines.length; i++) {
    const cols = lines[i];
    if (cols.length === 0 || cols.every(c => c === '')) continue;
    
    if (cols[0] && cols[0] === cols[0].toUpperCase() && !cols[0].includes('TOTAL') && !cols[0].includes('COSTO')) {
        const name = cols[0].trim();
        if (currentCity) cities.push(currentCity);
        
        if (!cityConfig[name]) {
            currentCity = null;
            continue; // Not configured correctly yet
        }
        
        const conf = cityConfig[name];
        let profiles = [];
        
        conf.cols.forEach(colIdx => {
            let pName = cols[colIdx] || `Profile ${colIdx}`;
            if (pName.toLowerCase().includes('nota') || pName.toLowerCase().includes('fuente') || pName.toLowerCase().includes('detalle') || pName.toLowerCase().includes('contextual')) {
                pName = `Option ${colIdx}`;
            }
            profiles.push({
                index: colIdx,
                name: pName.replace(/"/g, '').trim(),
                housing: 0, food: 0, transport: 0, health: 0, leisure: 0, tuition: 0
            });
        });
        
        currentCity = {
            name: name,
            currency: cityCurrencyMap[name] || 'USD',
            mult: conf.mult,
            profiles: profiles
        };
        continue;
    }
    
    if (!currentCity) continue;
    
    const rowTitle = (cols[1] || cols[0] || '').toLowerCase();
    const isHousing = ['vivienda', 'alojamiento', 'alquiler', 'housing', 'habitación', 'apartamento'].some(k => rowTitle.includes(k));
    const isFood = ['alimentación', 'comida', 'supermercado', 'board', 'comer', 'restaurante'].some(k => rowTitle.includes(k));
    const isTransport = ['transporte', 'transport', 'metro', 'taxi', 'uber'].some(k => rowTitle.includes(k));
    const isHealth = ['seguro', 'salud', 'médico', 'health', 'cuota'].some(k => rowTitle.includes(k) && !rowTitle.includes('matrícula'));
    const isTuition = ['matrícula', 'tuition', 'academic', 'material academico'].some(k => rowTitle.includes(k));
    const isLeisure = !isHousing && !isFood && !isTransport && !isHealth && !isTuition && 
                     ['ocio', 'personal', 'material', 'internet', 'servicio', 'celular', 'vario', 'ropa', 'entretenimiento', 'otros', 'imprevisto', 'vuelo', 'utilidades', 'básico', 'gastos'].some(k => rowTitle.includes(k));
                     
    currentCity.profiles.forEach((p) => {
        const colVal = cols[p.index];
        if (!colVal) return;
        
        let val = parseCost(colVal) * currentCity.mult;
        
        if (val > 0) {
            if (isHousing) p.housing += val;
            else if (isFood) p.food += val;
            else if (isTransport) p.transport += val;
            else if (isHealth) p.health += val;
            else if (isLeisure) p.leisure += val;
            else if (isTuition) p.tuition += val;
        }
    });
}
if (currentCity) cities.push(currentCity);

// Clean and format
const formattedCities = cities
    .filter(c => c.profiles.length > 0 && c.profiles.some(p => p.housing > 0 || p.food > 0))
    .map(c => {
        return {
            name: c.name,
            currency: c.currency,
            region: cityRegionMap[c.name] || 'Other',
            profiles: c.profiles.map(p => {
                const totalMonth = p.housing + p.food + p.transport + p.health + p.leisure + p.tuition;
                return {
                    name: p.name,
                    costs: {
                        housing: Math.round(p.housing),
                        food: Math.round(p.food),
                        transport: Math.round(p.transport),
                        health: Math.round(p.health),
                        leisure: Math.round(p.leisure),
                        tuition: Math.round(p.tuition)
                    },
                    totalMonth: Math.round(totalMonth),
                    totalMonthUSD: Math.round(totalMonth * (exchangeRates[c.currency] || 1))
                };
            })
        };
    });

fs.mkdirSync(path.resolve('c:/Users/USER/Desktop/GHS/global-calculator/data'), { recursive: true });
fs.writeFileSync(path.resolve('c:/Users/USER/Desktop/GHS/global-calculator/data/app_data.js'), 'const APP_DATA = ' + JSON.stringify(formattedCities, null, 2) + ';');
console.log('Successfully generated app_data.js with ' + formattedCities.length + ' cities.');
