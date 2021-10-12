//Navigointi linkit
function over(obj){obj.style.color = "#e71d36ff";}
function out(obj) {obj.style.color = "black";}    

let mapOptions = {
    center:[60.220261, 24.812242],
    zoom:10
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
marker.addTo(map);
