// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
// add mapbox/dark-v10 to make the layer dark. https://docs.mapbox.com/api/maps/styles/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY 
});


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng);
            },
    style: styleInfo  
    
  }).addTo(map);
});
    // This function returns the style data for each of the earthquakes we plot on
    // the map. We pass the magnitude of the earthquake into a function
    // to calculate the radius.
    function styleInfo(feature) {
      return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
      };
      }        

    // This function determines the radius of the earthquake marker based on its magnitude.
    // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
    function getRadius(magnitude) {
      if (magnitude === 0) {
      return 1;
      }
      return magnitude * 4;
      }    
















// Accessing the airport GeoJSON URL
//let torontoHoods = "https://raw.githubusercontent.com/sdieckert/Mapping_Earthquakes/main/torontoNeighborhoods.json"
// Create a style for the lines.
//let myStyle = {
//  color: "#ffffa1",
//  weight: 2
//}

// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
//  console.log(data);

// Grabbing our GeoJSON data.
//  L.geoJson(data,{
//   style: myStyle,

// We turn each feature into a marker on the map.
//onEachFeature: function(feature, layer) {
//    console.log(layer);
//   layer.bindPopup("<h6>" + "Neighborhood: " + feature.properties.AREA_NAME +"<br>" + "</h6>");
//    }
  
  
//}).addTo(map);
//});