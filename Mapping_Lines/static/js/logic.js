// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  }).setView([39.102239973680845, -94.5908718570489], 5)//.setView([34.0522, -118.2437], 14);

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [30.197498900442294, -97.66636363187808],
  [42.22617205166139, -83.34729958915457],
  [43.67765550316715, -79.62476605840706],
  [40.64136420968686, -73.77832854768364]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity:0.5,
  dashArray:"20 10"

}).addTo(map);

/*
// Get data from cities.js
let cityData = cities;
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius:city.population/100000,
    color:"darkorange",
    colorFill:"orange"
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});
*/
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/light-v10",
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//var marker = L.marker([51.5, -0.09]).addTo(map);
