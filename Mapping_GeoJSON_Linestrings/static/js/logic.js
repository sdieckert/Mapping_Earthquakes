// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
// add mapbox/dark-v10 to make the layer dark. https://docs.mapbox.com/api/maps/styles/

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY 
});


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    Street: light,
    Dark: dark
  };


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/sdieckert/Mapping_Earthquakes/main/torontoRoutes.json"

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}


// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);

// Grabbing our GeoJSON data.
  L.geoJson(data,{
    style: myStyle,

// We turn each feature into a marker on the map.
onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h6>" + "Airline Code: " + feature.properties.airline +"<br>" + "Destination: " + feature.properties.dst + "</h6>");
    }
  
  
}).addTo(map);
});