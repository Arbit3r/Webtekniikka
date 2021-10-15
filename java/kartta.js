//Navigointi linkit
'use strict';

function over(obj){obj.style.color = "#e71d36ff";}
function out(obj) {obj.style.color = "black";}    

let mapOptions = {
    center:[60.220261, 24.812242],
    zoom:10
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


L.Routing.control({
  waypoints: [
    L.latLng(60.220261, 24.812242),
    L.latLng(60.15163806308306, 25.04338090918575)
  ]
}).addTo(map);
