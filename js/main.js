// initialize the map. The global variable stores the map object for subsequent reference
var map;

map = L.map ('map', {
		center: [25.694330, -15.459268],
		zoom: 2.4
    });

// adding the tile layers (basemaps) to the map 

var Dark_Streets = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: '2aGuIHpH6H1xqQq2ly21G8ecFhmzxpf7NydCHPRwyEKgvQCmhkrUDAtTBCo4jkxw'
});

var streets =  L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: '2aGuIHpH6H1xqQq2ly21G8ecFhmzxpf7NydCHPRwyEKgvQCmhkrUDAtTBCo4jkxw'
}).addTo(map);


// this variable will be used in the layer control (at the end)
var baseMaps = {
	"Streets Dark": Dark_Streets,
	"Streets Light": streets
}

// adding scale bar
L.control.scale({position:'bottomright', imperial:false}).addTo(map);

// adding north arrow
var north = L.control({position: "topright"});
north.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img src= "data/north-arrow.png" alt="Image" height = "30" width="30">';
    return div;
}
north.addTo(map);

//adding sidebar
var sidebar = L.control.sidebar('sidebar', 'left').addTo(map);

//adding wfs to map


L.esri.featureLayer({
	url: 'https://services7.arcgis.com/SONJ3c5lv0Fv1KtG/arcgis/rest/services/Worldgeo_Clean_CSV/FeatureServer/0'
  }).addTo(map);
//adding Layer control
L.control.layers(baseMaps).addTo(map); 