// Declaring Global variable "Burren" Object //
const myObj = {
    burren: {
        restaurants: ['Bofeys', 52.94537, -9.06517, 'Monks', 53.11988, -9.15470, 'Wild Atlantic Lodge', 53.11598, -9.14812, 'Tea & Garden Rooms', 53.11906, -9.15373, 'Red Onion', 52.99014, -9.21973], 
        accommodations: ["The Wild Atlantic Lodge", 53.11595, -9.14816, "Vaughan Lodge Hotel", 52.93323, -9.34100, "Ballinalacken Castle", 53.04661, -9.33783, "Sheedy's Country House",53.03076, -9.28944, "Doolin Inn", 53.01280, -9.38368],
        attractions: ['Ailwee Cave', 53.08926, -9.14367, 'Doolin Cliff Walks', 52.99854, -9.38787, 'Burren Birds of Prey Centre', 53.08936, -9.14394, 'Cliffs of Moher Geopark', 52.97236, -9.42632, 'The Burren Centre', 52.99043, -9.21658]
    }
}   


function initChoice(choices) {
        return (myVar0 = Object.keys(myObj).map((key) => myObj[key][choices][0]),
        myVar1 = Object.keys(myObj).map((key) => myObj[key][choices][1]),
        myVar2 = Object.keys(myObj).map((key) => myObj[key][choices][2]),
        myVar3 = Object.keys(myObj).map((key) => myObj[key][choices][3]),
        myVar4 = Object.keys(myObj).map((key) => myObj[key][choices][4]),
        myVar5 = Object.keys(myObj).map((key) => myObj[key][choices][5]),
        myVar6 = Object.keys(myObj).map((key) => myObj[key][choices][6]),
        myVar7 = Object.keys(myObj).map((key) => myObj[key][choices][7]),
        myVar8 = Object.keys(myObj).map((key) => myObj[key][choices][8]),
        myVar9 = Object.keys(myObj).map((key) => myObj[key][choices][9]),
        myVar10 = Object.keys(myObj).map((key) => myObj[key][choices][10]),
        myVar11 = Object.keys(myObj).map((key) => myObj[key][choices][11]),
        myVar12 = Object.keys(myObj).map((key) => myObj[key][choices][12]),
        myVar13 = Object.keys(myObj).map((key) => myObj[key][choices][13]),
        myVar14 = Object.keys(myObj).map((key) => myObj[key][choices][14])),
        logger();
}

function logger() {
        console.log(myVar0);
        console.log(myVar1);
        console.log(myVar2);
        console.log(myVar3);
        console.log(myVar4);
        console.log(myVar5);
        console.log(myVar6);
        console.log(myVar7);
        console.log(myVar8);
        console.log(myVar9);
        console.log(myVar10);
        console.log(myVar11);
        console.log(myVar12);
        console.log(myVar13);
        console.log(myVar14);
}


//Fade in JavaScript for 3ximages (consecutive)

var pics = document.getElementById("pics");

var height,
    half;

var element = document.getElementById("pics");

window.addEventListener("resize", adjustHeightVars);
window.addEventListener("scroll", fadeBox);

function fadeBox() {
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

    var labels = "ABCDE";

    var locations = [{
        lat: 52.94537,
        lng: -9.06517
    }, {
        lat: 53.11988,
        lng: -9.15470
    }, {
        lat: 53.11598,
        lng: -9.14812
    }, {
        lat: 53.11906,
        lng: -9.15373
    }, {
        lat: 52.99014,
        lng: -9.21973
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

// Contact Form (EmailJS)