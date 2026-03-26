let citiesData = [];
let CONF = {}; 

const R_KEYS = { 'Americas': 'ame', 'Europe': 'eur', 'Asia-Pac': 'asi', 'MEA': 'mea' };
const COLORS = { 'ame': '#1B5FA8', 'eur': '#0F7A55', 'asi': '#8C4A0A', 'mea': '#C8993A' };

async function init() {
    try {
        citiesData = typeof APP_DATA !== 'undefined' ? APP_DATA : [];

        // Initialization Profiles
        citiesData.forEach(c => {
            CONF[c.name] = {
                on: false,
                tierIdx: c.profiles.length > 1 ? 1 : 0, // default standard mode if it exists
                duration: 9 // 9 months default
            };
        });

        renderMods();
        document.querySelectorAll('.filter-cb').forEach(cb => cb.addEventListener('change', recalcAll));
        recalcAll();
    } catch(err) {
        console.error("Data load failed", err);
    }
}

function fmt(n) { return '$' + Math.round(n).toLocaleString() + ' USD'; }

function renderMods() {
    citiesData.forEach((city, i) => {
        const rKey = R_KEYS[city.region] || 'ame';
        const container = document.getElementById(`mods-${rKey}`);
        const cColor = COLORS[rKey];
        
        const div = document.createElement('div');
        div.className = 'mod';
        div.id = `mod-${i}`;
        
        // Tiers Segmentation
        let segHtml = `<div class="seg-wrap" style="margin-bottom:1rem;">`;
        city.profiles.forEach((p, pIdx) => {
            segHtml += `<div class="seg-btn" id="seg-${i}-${pIdx}" onclick="switchTier(${i}, ${pIdx}, event)">${p.name}</div>`;
        });
        segHtml += `</div>`;

        div.innerHTML = `
            <div class="mod-head" onclick="toggleMod(${i})">
                <div class="chk" id="chk-${i}" style="color:${cColor}"></div>
                <span class="mod-lbl">${city.name}</span>
                <span class="mod-price" id="preview-${i}"></span>
            </div>
            <div class="mod-body">
                <div class="slabel" style="margin-top:0;">Lifestyle Tier Preference</div>
                ${segHtml}
                <div class="mod-sl-row">
                    <div class="mod-sl-top">
                        <span class="mod-sl-lbl">Months of Stay</span>
                        <span class="mod-sl-val" id="dur-val-${i}">9</span>
                    </div>
                    <input type="range" min="1" max="12" value="9" id="dur-${i}" oninput="updateDur(${i})" style="color:${cColor}; margin-top: 0.3rem;">
                </div>
                <div class="mod-result">
                    <span class="mod-result-lbl">Total Period Cost</span>
                    <span class="mod-result-val" id="total-${i}" style="color:${cColor}">—</span>
                </div>
                <div class="brk-grid" id="brk-${i}"></div>
            </div>
        `;
        container.appendChild(div);
        
        // Intialize visual active states
        setTierUI(i, CONF[city.name].tierIdx);
    });
}

function switchTheme(id, color, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.pane').forEach(p => p.classList.remove('active'));
    el.classList.add('on');
    document.getElementById(`pane-${id}`).classList.add('active');
    
    // Auto-update dashboard metrics
    if (id === 'cmp') {
        recalcAll();
    }
}

window.switchTheme = switchTheme;

function toggleMod(i) {
    const city = citiesData[i];
    CONF[city.name].on = !CONF[city.name].on;
    
    document.getElementById(`mod-${i}`).classList.toggle('sel', CONF[city.name].on);
    document.getElementById(`chk-${i}`).classList.toggle('on', CONF[city.name].on);
    
    recalcAll();
}

window.toggleMod = toggleMod;

function switchTier(cityIdx, tierIdx, e) {
    e.stopPropagation();
    const city = citiesData[cityIdx];
    CONF[city.name].tierIdx = tierIdx;
    setTierUI(cityIdx, tierIdx);
    recalcAll();
}

window.switchTier = switchTier;

function updateDur(i) {
    const city = citiesData[i];
    const val = document.getElementById(`dur-${i}`).value;
    document.getElementById(`dur-val-${i}`).textContent = val;
    CONF[city.name].duration = parseInt(val);
    recalcAll();
}

window.updateDur = updateDur;

function setTierUI(cityIdx, tierIdx) {
    const city = citiesData[cityIdx];
    city.profiles.forEach((_, j) => {
        const btn = document.getElementById(`seg-${cityIdx}-${j}`);
        if(btn) btn.classList.toggle('active', j === tierIdx);
    });
}

function recalcAll() {
    let regionTotals = { 'ame': 0, 'eur': 0, 'asi': 0, 'mea': 0 };
    let regionCounts = { 'ame': 0, 'eur': 0, 'asi': 0, 'mea': 0 };
    let activeCities = [];

    const filters = Array.from(document.querySelectorAll('.filter-cb')).filter(cb => cb.checked).map(cb => cb.value);

    citiesData.forEach((city, i) => {
        const cfg = CONF[city.name];
        const p = city.profiles[cfg.tierIdx];
        
        let validMonthly = 0;
        filters.forEach(f => {
            if (p.costs[f]) validMonthly += p.costs[f];
        });
        
        // Use ratio to convert local currency to USD based on the CSV mult/total
        const ratio = p.totalMonth > 0 ? (p.totalMonthUSD / p.totalMonth) : 1;
        const monthlyUSD = validMonthly * ratio;
        const totalPeriodUSD = monthlyUSD * cfg.duration;
        
        document.getElementById(`preview-${i}`).textContent = fmt(monthlyUSD) + '/mo';
        
        const brk = document.getElementById(`brk-${i}`);
        if(brk) {
            let bHtml = '';
            filters.forEach(f => {
                if(p.costs[f] > 0) {
                    bHtml += `<div class="brk-item"><span>${f.charAt(0).toUpperCase() + f.slice(1)}</span> <span class="brk-v">${fmt(p.costs[f] * ratio * cfg.duration)}</span></div>`;
                }
            });
            brk.innerHTML = bHtml;
        }
        
        if (cfg.on) {
            document.getElementById(`total-${i}`).textContent = fmt(totalPeriodUSD);
            const rKey = R_KEYS[city.region] || 'ame';
            regionTotals[rKey] += monthlyUSD;
            regionCounts[rKey]++;
            activeCities.push({ name: city.name, profile: p.name, duration: cfg.duration, monthly: monthlyUSD, total: totalPeriodUSD, rKey: rKey });
        } else {
            document.getElementById(`total-${i}`).textContent = '—';
        }
    });

    ['ame', 'eur', 'asi', 'mea'].forEach(r => {
        const avg = regionCounts[r] > 0 ? regionTotals[r] / regionCounts[r] : 0;
        document.getElementById(`total-${r}`).textContent = avg > 0 ? fmt(avg) : '—';
    });

    document.getElementById('cmp-count').textContent = activeCities.length;
    
    const cmpContainer = document.getElementById('compare-bars');
    cmpContainer.innerHTML = '';

    if (activeCities.length === 0) {
        cmpContainer.innerHTML = `<div style="text-align:center; padding: 2rem; color: #A09C96; font-size:13px; font-style:italic;">No cities selected for comparison</div>`;
        document.getElementById('kpi-avg').textContent = '—';
        document.getElementById('kpi-low').textContent = '—';
        document.getElementById('kpi-high').textContent = '—';
        window._activeCities = [];
        return;
    }

    let sum = 0, min = Infinity, max = 0;
    activeCities.forEach(c => {
        sum += c.monthly;
        if (c.monthly < min) min = c.monthly;
        if (c.monthly > max) max = c.monthly;
    });
    
    document.getElementById('kpi-avg').textContent = fmt(sum / activeCities.length);
    document.getElementById('kpi-low').textContent = fmt(min);
    document.getElementById('kpi-high').textContent = fmt(max);

    // Sort active cities descending by total value so it shares and displays neatly
    activeCities.sort((a,b) => b.total - a.total);
    activeCities.forEach((c, idx) => {
        const pct = Math.round((c.total / activeCities[0].total) * 100);
        const color = COLORS[c.rKey];
        
        const row = document.createElement('div');
        row.className = 'bar-row';
        row.innerHTML = `
            <div class="bar-lrow">
                <span>${c.name} <span style="font-size:10px; color:#A09C96; font-weight:normal; margin-left:4px;">${c.profile}</span></span>
                <span>${fmt(c.monthly)}</span>
            </div>
            <div class="bar-track">
                <!-- Smooth CSS transition width application -->
                <div class="bar-fill" id="bf-${idx}" style="background:${color}; width:0%"></div>
            </div>
        `;
        cmpContainer.appendChild(row);
        
        // Trigger reflow for animation
        setTimeout(() => {
            const fill = document.getElementById(`bf-${idx}`);
            if (fill) fill.style.width = pct + '%';
        }, 50);
    });
    
    // Attach current state to window for sharing
    window._activeCities = activeCities;
}

function shareWhatsApp() {
    const activeCities = window._activeCities || [];
    
    if (activeCities.length === 0) {
        alert("Please select at least one city to share.");
        return;
    }

    let text = `*Global Calculator by Ascend*\n_Study Abroad Cost Comparison_\n\n`;
    
    activeCities.forEach(c => {
        text += `*${c.name}*\n`;
        text += `   • Lifestyle: ${c.profile}\n`;
        text += `   • Stay: ${c.duration} Month(s)\n`;
        text += `   • Est. Monthly: $${Math.round(c.monthly).toLocaleString('en-US')} USD\n`;
        text += `   • *Total Period: $${Math.round(c.total).toLocaleString('en-US')} USD*\n\n`;
    });

    text += `_Generated by Paradise International College_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encoded}`, '_target');
}
window.shareWhatsApp = shareWhatsApp;

window.document.addEventListener('DOMContentLoaded', init);
