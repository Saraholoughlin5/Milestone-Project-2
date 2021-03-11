//Fade in JavaScript for 3ximages (consecutive)

var pics = document.getElementById("pics");

var height,
		half;
		
var element = document.getElementById("pics");

window.addEventListener("resize", adjustHeightVars);
window.addEventListener("scroll", fadeBox);

function fadeBox () {	
	var x = pics.offsetTop - half;
	var y = window.pageYOffset;
	if (y >= x) {
		$(".explore").addClass("fadein");
		$(".eat").addClass("fadein");
		$(".enjoy").addClass("fadein");
	}
}

function adjustHeightVars() {
	height = window.innerHeight;
	half = height * 1.1;
}

adjustHeightVars();
console.log(pics);

//Google Maps JavaScript and location data

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 40.785091,
        lng: -73.968285
    }, {
        lat: 41.084045,
        lng: -73.874256
    }, {
        lat: 40.754932,
        lng: -73.984016
    }];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}