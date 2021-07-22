// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

//Your data markers should reflect the magnitude of the earthquake 
//by their size and and depth of the earth quake by color. 
//Earthquakes with higher magnitudes should appear larger and earthquakes 
//with greater depth should appear darker in color.

//HINT the depth of the earth can be found as the third coordinate for each earthquake.

//Include popups that provide additional information about the earthquake when a marker is clicked.

//Create a legend that will provide context for your map data.

var myMap = L.map("map", {
    center: [40.76, -111.89],
    zoom: 5
});
  
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);


var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
console.log(link);
// Grabbing our GeoJSON data..
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});



