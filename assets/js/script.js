// Automatic active class for button 1
$("#button-one").toggleClass("active");
var increment = 0;

// Declaring Global variable "Burren" Object.
const myObj = {
    burren: {
        restaurants: ["Bofey Quinn's Bar & Lodge, Corofin", 52.94537, -9.06517, "Monks Seafood Restaurant & Bar, Ballyvaughan", 53.11988, -9.15470, "The Wild Atlantic Lodge, Ballyvaughan", 53.11598, -9.14812, "Tea & Garden Rooms, Ballyvaughan", 53.11906, -9.15373, "Vaughan's Pub, Kilfenora", 52.99014, -9.21974], 
        accommodations: ["The Wild Atlantic Lodge, Ballyvaughan", 53.11595, -9.14816, "Vaughan Lodge Hotel, Lahinch", 52.93323, -9.34100, "Ballinalacken Castle, Country House Hotel, Doolin", 53.04661, -9.33783, "Sheedy's Country House Hotel, Lisdoonvarna",53.03076, -9.28944, "Doolin Inn, Doolin", 53.01280, -9.38368],
        attractions: ["Poulnabrone Dolmen, Poulnabrone", 53.04879, -9.14007, "Doolin Cliff Walks, Doolin", 52.99854, -9.38787, "Burren Birds of Prey Centre, Ballyvaughan", 53.08936, -9.14394, "Cliffs of Moher Geopark, Inis Díomáin", 52.97236, -9.42632, "The Burren Centre, Kilfenora", 52.99043, -9.21658]
    }
}   

// Declaring Global variables as null initially.
var myVar0; var myVar1; var myVar2; var myVar3; var myVar4; var myVar5; var myVar6; var myVar7;
var myVar8; var myVar8; var myVar9; var myVar10; var myVar11; var myVar12; var myVar13; var myVar14;

// function to change between restaurants, accommodations and attractions.
function initChoice(choices) {
    if (increment == 0) {
        if (choices == 'accommodations') {
            $("#button-one").toggleClass("active");
        } else if (choices == 'attractions') {
            $("#button-one").toggleClass("active");
        } 
    }
    return (myVar0 = Object.keys(myObj).map((key) => myObj[key][choices][0]),
    myVar1 = Object.keys(myObj).map((key) => myObj[key][choices][1])[0],
    myVar2 = Object.keys(myObj).map((key) => myObj[key][choices][2])[0],
    myVar3 = Object.keys(myObj).map((key) => myObj[key][choices][3]),
    myVar4 = Object.keys(myObj).map((key) => myObj[key][choices][4])[0],
    myVar5 = Object.keys(myObj).map((key) => myObj[key][choices][5])[0],
    myVar6 = Object.keys(myObj).map((key) => myObj[key][choices][6]),
    myVar7 = Object.keys(myObj).map((key) => myObj[key][choices][7])[0],
    myVar8 = Object.keys(myObj).map((key) => myObj[key][choices][8])[0],
    myVar9 = Object.keys(myObj).map((key) => myObj[key][choices][9]),
    myVar10 = Object.keys(myObj).map((key) => myObj[key][choices][10])[0],
    myVar11 = Object.keys(myObj).map((key) => myObj[key][choices][11])[0],
    myVar12 = Object.keys(myObj).map((key) => myObj[key][choices][12]),
    myVar13 = Object.keys(myObj).map((key) => myObj[key][choices][13])[0],
    myVar14 = Object.keys(myObj).map((key) => myObj[key][choices][14])[0], 
    increment = increment + 1),
    changeDivTxt();
}

// Change div text
function changeDivTxt() {
    var newDivTxt0 = document.getElementById("p0");
    var newDivTxt1 = document.getElementById("p1");
    var newDivTxt2 = document.getElementById("p2");
    var newDivTxt3 = document.getElementById("p3");
    var newDivTxt4 = document.getElementById("p4");
    newDivTxt0.innerHTML = myVar0;
    newDivTxt1.innerHTML = myVar3;
    newDivTxt2.innerHTML = myVar6;
    newDivTxt3.innerHTML = myVar9;
    newDivTxt4.innerHTML = myVar12;
    setMap();
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

//Google Maps JavaScript and location data
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.03760,
            lng: -9.07613
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

function setMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.03760,
            lng: -9.07613
        }
    });

    var labels = "ABCDE";

    var locations = [{
        lat: myVar1,
        lng: myVar2
    }, {
        lat: myVar4,
        lng: myVar5
    }, {
        lat: myVar7,
        lng: myVar8
    }, {
        lat: myVar10,
        lng: myVar11
    }, {
        lat: myVar13,
        lng: myVar14
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
//Google Maps JavaScript and location data

// Contact Form (EmailJS)