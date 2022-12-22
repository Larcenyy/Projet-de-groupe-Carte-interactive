let map = L.map('map').setView([50.1206,3.6608], 14);
let map2 = L.map('map2').setView([50.4006,3.6608], 14);
let map3 = L.map('map3').setView([50.1906,3.6608], 14);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

let marker = L.marker([51.5, -0.09]).addTo(map);

let circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

marker.bindPopup("<b>Hey!</b><br>Vous êtes ici").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

let popup = L.popup()
    .setLatLng([50.1226, 3.7108])
    .setContent("I am a standalone popup.")
    .openOn(map);

function onMapClick(e) {
    alert("Vous avez cliquer à l'endroit : " + e.latlng);
}

map.on('click', onMapClick);

