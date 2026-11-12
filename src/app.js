const speciesData = [
  {
    id: 'adonis-distorta',
    scientificName: 'Adonis distorta',
    commonName: 'Adonide distorta',
    protection: 'Allegato II/IV Dir. Habitat',
    redList: 'Vulnerabile',
    source: 'Portale Flora d\'Italia',
    year: 2023,
    flowering: 'aprile – maggio',
    reliability: 'high',
    coords: [42.7825, 13.2035],
    note: 'Segnalazione GPS puntuale in prateria steppica calcareo-silicea.'
  },
  {
    id: 'cypripedium-calceolus',
    scientificName: 'Cypripedium calceolus',
    commonName: 'Fior di cioccolata',
    protection: 'Allegato II/IV Dir. Habitat',
    redList: 'In pericolo critico',
    source: 'GBIF',
    year: 2021,
    flowering: 'maggio – giugno',
    reliability: 'high',
    coords: [42.787, 13.211],
    note: 'Popolazione localizzata in bosco misto di caducifoglie su suoli calcarei.'
  },
  {
    id: 'fagus-sylvatica',
    scientificName: 'Fagus sylvatica',
    commonName: 'Faggio',
    protection: 'Habitat prioritario – 9210',
    redList: 'Non a rischio',
    source: 'Carta Habitat ISPRA',
    year: 2018,
    flowering: 'aprile – maggio',
    reliability: 'medium',
    coords: [42.7902, 13.217],
    note: 'Faggeta mesofila in buon stato strutturale, stima areale di livello comunale.'
  },
  {
    id: 'orchis-purpurea',
    scientificName: 'Orchis purpurea',
    commonName: 'Orchidea porpora',
    protection: 'Allegato II/IV Dir. Habitat',
    redList: 'Vulnerabile',
    source: 'Portale Flora d\'Italia',
    year: 2024,
    flowering: 'maggio – giugno',
    reliability: 'high',
    coords: [42.7765, 13.1945],
    note: 'Individui osservati in radura di pascolo e in margine di bosco.'
  },
  {
    id: 'himantoglossum-adriaticum',
    scientificName: 'Himantoglossum adriaticum',
    commonName: 'Lingua di cane adriatica',
    protection: 'Allegato II/IV Dir. Habitat',
    redList: 'Vulnerabile',
    source: 'GBIF',
    year: 2011,
    flowering: 'aprile – giugno',
    reliability: 'medium',
    coords: [42.778, 13.224],
    note: 'Censimento storico con localizzazione riferita a quadrante comunale.'
  },
  {
    id: 'lilium-martagon',
    scientificName: 'Lilium martagon',
    commonName: 'Giglio martagone',
    protection: 'Specie di interesse comunitario',
    redList: 'Quasi minacciato',
    source: 'Portale Flora d\'Italia',
    year: 2020,
    flowering: 'giugno – luglio',
    reliability: 'high',
    coords: [42.786, 13.198],
    note: 'Esemplari in sottobosco umido, in prossimità di margini forestali.'
  },
  {
    id: 'narcissus-triandrus',
    scientificName: 'Narcissus triandrus',
    commonName: 'Narciso a tre stami',
    protection: 'Monitoraggio regionale',
    redList: 'Rischio basso',
    source: 'Atlante floristico regionale',
    year: 1998,
    flowering: 'marzo – maggio',
    reliability: 'low',
    coords: [42.7705, 13.205],
    note: 'Segnalazione risalente a repertorio regionale, precisione non verificabile.'
  },
  {
    id: 'buxus-sempervirens',
    scientificName: 'Buxus sempervirens',
    commonName: 'Bosso sempreverde',
    protection: 'Non protetto',
    redList: 'Non a rischio',
    source: 'Carta Habitat ISPRA',
    year: 2007,
    flowering: 'aprile – maggio',
    reliability: 'medium',
    coords: [42.7818, 13.2378],
    note: 'Localizzazione associata a habitat rupestri e macchia mediterranea di transizione.'
  },
  {
    id: 'gentiana-verna',
    scientificName: 'Gentiana verna',
    commonName: 'Genziana primaverile',
    protection: 'Specie protetta',
    redList: 'Vulnerabile',
    source: 'GBIF',
    year: 2022,
    flowering: 'marzo – maggio',
    reliability: 'high',
    coords: [42.789, 13.183],
    note: 'Patch in prateria calcareo-dolomitica, osservazione recente con foto e coordinate GPS.'
  },
  {
    id: 'anemone-narcissiflora',
    scientificName: 'Anemone narcissiflora',
    commonName: 'Anemone dei prati alpini',
    protection: 'Protezione regionale',
    redList: 'Minacciata',
    source: 'Archivio cartografico regionale',
    year: 1896,
    flowering: 'giugno – luglio',
    reliability: 'low',
    coords: [42.7982, 13.2445],
    note: 'Dati storici non verificati, localizzazione approssimativa e priva di georeferenziazione moderna.'
  }
];

const habitatLayer = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: '9210 - Faggete mesofile di montagna' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [13.171, 42.764],
          [13.197, 42.787],
          [13.231, 42.781],
          [13.238, 42.742],
          [13.198, 42.734],
          [13.172, 42.758],
          [13.171, 42.764]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { name: '6510 - Praterie pascolive pseudo-steppiche' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [13.184, 42.775],
          [13.221, 42.796],
          [13.248, 42.753],
          [13.202, 42.721],
          [13.184, 42.775]
        ]]
      }
    }
  ]
};

const areaPreset = {
  center: [42.782, 13.208],
  radiusKm: 1,
  name: 'Impianto FV - Appennino Centrale'
};

const state = {
  map: null,
  projectCircle: null,
  areaSelected: false,
  projectArea: null,
  selectedSpeciesId: null,
  protectedOnly: false,
  recentOnly: false,
  markers: [],
  habitatLayerGroup: null
};

const selectionSummary = document.getElementById('selectionSummary');
const speciesListEl = document.getElementById('speciesList');
const speciesDetailEl = document.getElementById('speciesDetail');
const areaNameEl = document.getElementById('areaName');
const protectedFilterEl = document.getElementById('protectedFilter');
const recentFilterEl = document.getElementById('recentFilter');
const exportBtn = document.getElementById('exportBtn');
const simulateAreaBtn = document.getElementById('simulateAreaBtn');
const overviewStats = document.getElementById('overviewStats');
const resetAreaBtn = document.getElementById('resetAreaBtn');
const prioritySummary = document.getElementById('prioritySummary');
const riskBadge = document.getElementById('riskBadge');
const mapHint = document.getElementById('mapHint');

function initializeMap() {
  state.map = L.map('map', { scrollWheelZoom: true }).setView([42.782, 13.206], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(state.map);

  state.habitatLayerGroup = L.layerGroup().addTo(state.map);
  renderHabitats();

  state.map.on('click', (event) => {
    if (!state.areaSelected) {
      selectAreaByClick(event.latlng);
    }
  });
}

function renderHabitats() {
  state.habitatLayerGroup.clearLayers();

  habitatLayer.features.forEach((feature) => {
    const polygon = L.polygon(
      feature.geometry.coordinates.map((ring) => ring.map(([lng, lat]) => [lat, lng])),
      {
        color: '#2d6a4f',
        weight: 2,
        opacity: 0.8,
        fillColor: '#8dbf9d',
        fillOpacity: 0.2
      }
    ).addTo(state.habitatLayerGroup);

    polygon.bindPopup(`<strong>${feature.properties.name}</strong>`);
  });
}

function getReliabilityInfo(reliability) {
  if (reliability === 'high') {
    return {
      label: 'Verde',
      className: 'good',
      text: 'Coordinata puntuale GPS, post-2020'
    };
  }

  if (reliability === 'medium') {
    return {
      label: 'Giallo',
      className: 'medium',
      text: 'Scala comunale, 2010-2019'
    };
  }

  return {
    label: 'Rosso',
    className: 'bad',
    text: 'Dato storico pre-2000 / impreciso'
  };
}

function getFilteredSpecies() {
  return speciesData.filter((species) => {
    if (state.protectedOnly) {
      const protectedText = species.protection.toLowerCase();
      const isProtected = protectedText.includes('dir. habitat') || protectedText.includes('specie protetta') || protectedText.includes('interesse comunitario');
      if (!isProtected) {
        return false;
      }
    }

    if (state.recentOnly) {
      const isRecent = species.year >= 2020 && species.reliability === 'high';
      if (!isRecent) {
        return false;
      }
    }

    return true;
  });
}

function renderSpeciesList() {
  const filteredSpecies = getFilteredSpecies();
  speciesListEl.innerHTML = '';

  if (!filteredSpecies.length) {
    speciesListEl.innerHTML = '<div class="empty-state">Nessuna specie conforme ai filtri correnti.</div>';
    return;
  }

  if (!filteredSpecies.some((species) => species.id === state.selectedSpeciesId)) {
    state.selectedSpeciesId = filteredSpecies[0].id;
  }

  filteredSpecies.forEach((species) => {
    const reliability = getReliabilityInfo(species.reliability);
    const speciesItem = document.createElement('button');
    speciesItem.type = 'button';
    speciesItem.className = 'species-item';
    if (species.id === state.selectedSpeciesId) {
      speciesItem.classList.add('active');
    }

    speciesItem.innerHTML = `
      <span class="badge ${reliability.className}">${reliability.label}</span>
      <span class="species-name">
        <strong>${species.scientificName}</strong>
        <span>${species.source}</span>
      </span>
      <span class="badge ${species.protection.includes('Allegato') ? 'good' : 'medium'}">${species.year}</span>
    `;

    speciesItem.addEventListener('click', () => {
      state.selectedSpeciesId = species.id;
      renderSpeciesList();
      renderSpeciesDetail(species);
    });

    speciesListEl.appendChild(speciesItem);
  });

  const selectedSpecies = filteredSpecies.find((species) => species.id === state.selectedSpeciesId) || filteredSpecies[0];
  renderSpeciesDetail(selectedSpecies);
}

function renderSpeciesDetail(species) {
  if (!species) {
    speciesDetailEl.innerHTML = '<p class="empty-state">Seleziona una specie per visualizzare il dettaglio.</p>';
    return;
  }

  const reliability = getReliabilityInfo(species.reliability);
  speciesDetailEl.innerHTML = `
    <div class="detail-section">
      <div class="detail-header">
        <div>
          <h3>${species.scientificName}</h3>
          <div class="detail-subtitle">${species.commonName}</div>
        </div>
        <span class="trust-indicator ${reliability.className}">${reliability.label}</span>
      </div>

      <div class="detail-grid">
        <div class="metric">
          <span class="metric-label">Stato di conservazione</span>
          <div class="metric-value">${species.protection}<br><strong>${species.redList}</strong></div>
        </div>
        <div class="metric">
          <span class="metric-label">Fonte</span>
          <div class="metric-value">${species.source}</div>
        </div>
        <div class="metric">
          <span class="metric-label">Anno</span>
          <div class="metric-value">${species.year}</div>
        </div>
        <div class="metric">
          <span class="metric-label">Fioritura</span>
          <div class="metric-value">${species.flowering}</div>
        </div>
        <div class="metric" style="grid-column: 1 / -1;">
          <span class="metric-label">Indicatore affidabilità</span>
          <div class="metric-value">${reliability.text}</div>
        </div>
      </div>
    </div>
  `;
}

function renderMapMarkers() {
  state.markers.forEach((marker) => state.map.removeLayer(marker));
  state.markers = [];

  const visibleSpecies = getFilteredSpecies();

  visibleSpecies.forEach((species) => {
    const reliability = getReliabilityInfo(species.reliability);
    const marker = L.marker(species.coords, {
      icon: L.divIcon({
        className: 'custom-marker',
        html: `<span class="marker-badge ${reliability.className}">${species.scientificName.charAt(0).toUpperCase()}</span>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      })
    }).addTo(state.map);

    marker.bindPopup(`
      <div>
        <h3 class="popup-title">${species.scientificName}</h3>
        <p class="popup-meta"><strong>Fonte:</strong> ${species.source}<br>
        <strong>Anno:</strong> ${species.year}<br>
        <strong>Affidabilità:</strong> ${reliability.label}<br>
        <strong>Fioritura:</strong> ${species.flowering}</p>
      </div>
    `);

    marker.on('click', () => {
      state.selectedSpeciesId = species.id;
      renderSpeciesList();
    });

    state.markers.push(marker);
  });
}

function updateMapHint() {
  if (!state.areaSelected || !state.projectArea) {
    mapHint.textContent = 'Scegli un\'area o usa la simulazione di progetto.';
    exportBtn.disabled = true;
    return;
  }

  mapHint.textContent = `Area attiva: ${state.projectArea.name}. Puoi verificare le specie e esportare la checklist.`;
  exportBtn.disabled = false;
}

function setProjectArea(center, radiusKm, name) {
  if (state.projectCircle) {
    state.map.removeLayer(state.projectCircle);
  }

  state.areaSelected = true;
  state.projectArea = { center, radiusKm, name };
  areaNameEl.textContent = name;

  state.projectCircle = L.circle(center, {
    radius: radiusKm * 1000,
    color: '#1b4332',
    weight: 2,
    dashArray: '8 8',
    fillColor: '#8dbf9d',
    fillOpacity: 0.12
  }).addTo(state.map);

  state.map.fitBounds(state.projectCircle.getBounds(), { padding: [30, 30] });

  const visibleCount = getFilteredSpecies().length;
  selectionSummary.textContent = `Area verificata: ${name}. Raggio 1 km. ${visibleCount} specie in elenco.`;
  updateMapHint();
}

function selectAreaByClick(latlng) {
  setProjectArea([latlng.lat, latlng.lng], 1, 'Area di indagine selezionata manualmente');
}

function simulateProjectArea() {
  setProjectArea(areaPreset.center, areaPreset.radiusKm, areaPreset.name);
}

function resetArea() {
  if (state.projectCircle) {
    state.map.removeLayer(state.projectCircle);
    state.projectCircle = null;
  }

  state.areaSelected = false;
  state.projectArea = null;
  state.selectedSpeciesId = null;
  areaNameEl.textContent = 'Impianto FV - Appennino Centrale';
  selectionSummary.textContent = 'Nessuna area di indagine selezionata.';

  if (state.map) {
    state.map.setView([42.782, 13.206], 12);
  }

  updateMapHint();
  renderSpeciesList();
  renderMapMarkers();
  updateOverviewStats();
}

function updatePrioritySummary() {
  const visibleSpecies = getFilteredSpecies();

  const summary = [
    {
      label: 'Controlli GPS da confermare',
      count: visibleSpecies.filter((species) => species.reliability === 'high').length,
      level: 'low'
    },
    {
      label: 'Dati da verificare a scala comunale',
      count: visibleSpecies.filter((species) => species.reliability === 'medium').length,
      level: 'medium'
    },
    {
      label: 'Dati storici / imprecisi',
      count: visibleSpecies.filter((species) => species.reliability === 'low').length,
      level: 'high'
    }
  ];

  prioritySummary.innerHTML = summary.map((item) => `
    <div class="priority-item">
      <span>${item.label}</span>
      <strong class="${item.level}">${item.count}</strong>
    </div>
  `).join('');

  const highRisk = summary[2].count;
  const mediumRisk = summary[1].count;
  let riskClass = 'low';
  let riskLabel = 'Bassa';

  if (highRisk > 0 || mediumRisk >= 2) {
    riskClass = 'high';
    riskLabel = 'Alta';
  } else if (mediumRisk > 0) {
    riskClass = 'medium';
    riskLabel = 'Media';
  }

  riskBadge.className = `risk-badge ${riskClass}`;
  riskBadge.textContent = riskLabel;
}

function updateOverviewStats() {
  const visibleSpecies = getFilteredSpecies();
  const protectedSpecies = visibleSpecies.filter((species) => species.protection.toLowerCase().includes('dir. habitat') || species.protection.toLowerCase().includes('specie protetta') || species.protection.toLowerCase().includes('interesse comunitario')).length;
  const recentSpecies = visibleSpecies.filter((species) => species.year >= 2020 && species.reliability === 'high').length;
  const lowReliability = visibleSpecies.filter((species) => species.reliability === 'low').length;

  overviewStats.innerHTML = `
    <div class="stat-card">
      <strong>${visibleSpecies.length}</strong>
      <span>specie</span>
    </div>
    <div class="stat-card">
      <strong>${protectedSpecies}</strong>
      <span>protette</span>
    </div>
    <div class="stat-card">
      <strong>${recentSpecies}</strong>
      <span>recenti</span>
    </div>
    <div class="stat-card" style="grid-column: 1 / -1;">
      <strong>${lowReliability}</strong>
      <span>dato storico / da verificare</span>
    </div>
  `;

  updatePrioritySummary();
}

function exportCsv() {
  const visibleSpecies = getFilteredSpecies();

  if (!visibleSpecies.length) {
    alert('Nessuna specie disponibile per l\'esportazione.');
    return;
  }

  const csvRows = [
    ['Nome scientifico', 'Nome comune', 'Stato di conservazione', 'Lista rossa', 'Fonte', 'Anno', 'Periodo di fioritura', 'Affidabilità', 'Note sopralluogo'],
    ...visibleSpecies.map((species) => {
      const reliability = getReliabilityInfo(species.reliability);
      return [
        species.scientificName,
        species.commonName,
        species.protection,
        species.redList,
        species.source,
        species.year,
        species.flowering,
        reliability.label,
        species.note
      ];
    })
  ];

  const csv = csvRows
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(';'))
    .join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'checklist-flora-mappa.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

protectedFilterEl.addEventListener('change', () => {
  state.protectedOnly = protectedFilterEl.checked;
  refreshDashboard();
});

recentFilterEl.addEventListener('change', () => {
  state.recentOnly = recentFilterEl.checked;
  refreshDashboard();
});

simulateAreaBtn.addEventListener('click', simulateProjectArea);
exportBtn.addEventListener('click', exportCsv);
resetAreaBtn.addEventListener('click', resetArea);

initializeMap();
refreshDashboard();