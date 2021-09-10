var map = L.map('mapa').setView([-28.455693, -65.786256], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-28.455693, -65.786256]).addTo(map)
    .bindPopup('GDLWebCamp 2021<br> Boletos ya disponibles!.')
    .openPopup()
    .bindTooltip('Ubicación.')
    .openTooltip();