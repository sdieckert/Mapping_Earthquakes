// Add console.log to check to see if our code is working.
console.log("working");

// Option 1
// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Create the map object with a center and zoom level for Los Angeles, California.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//Option 1 on cirlce
// Add a marker to the map for Los Angeles, California
//L.circle([34.0522, -118.2437], {
//    radius: 300,
//    color: 'black',
//    fillColor: "yellow",
//    fillOpacity: 0.1,

//Option 2 on circle
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'


 }).addTo(map);

// We create the tile layer that will be the background of our map.
// add mapbox/dark-v10 to make the layer dark. https://docs.mapbox.com/api/maps/styles/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY 
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

