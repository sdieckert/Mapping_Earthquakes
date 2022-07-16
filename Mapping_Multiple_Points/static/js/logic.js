// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker(cities).addTo(map);

// Create the map object with a center and zoom level for Los Angeles, California.
//let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Get data from cities.js
let cityData = cities;

// An array containing each city's location, state, and population.
//let cities = [{
//    location: [40.7128, -74.0059],
//    city: "New York City",
//    state: "NY",
//    population: 8398748
//  },
//  {
//    location: [41.8781, -87.6298],
 //   city: "Chicago",
 //   state: "IL",
//    population: 2705994
//  },
//  {
//    location: [29.7604, -95.3698],
//    city: "Houston",
//    state: "TX",
//    population: 2325502
 // },
//  {
//    location: [34.0522, -118.2437],
//    city: "Los Angeles",
 //   state: "CA",
//    population: 3990456
//  },
//  {
 //   location: [33.4484, -112.0740],
 //   city: "Phoenix",
 //   state: "AZ",
 //   population: 1660272
//  }
 // ];

// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "orange",
        fillColor: '#ffffa1',
        weight: 4 
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
//Option 1 on circle
// Add a marker to the map for Los Angeles, California
//L.circle([34.0522, -118.2437], {
//    radius: 300,
//    color: 'black',
//    fillColor: "yellow",
//    fillOpacity: 0.1,

//Option 2 on circle
//L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//    color: "black",
//   fillColor: '#ffffa1'


//}).addTo(map);

// We create the tile layer that will be the background of our map.
// add mapbox/dark-v10 to make the layer dark. https://docs.mapbox.com/api/maps/styles/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY 
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
