"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceCities = DistanceCities;
exports.CordsCity = CordsCity;
var Module2_1 = require("../Module2");
var Module1_1 = require("../Module1");
function DistanceCities(CSV_or_URL, city1, country1, city2, country2) {
    (0, Module1_1.DistanceBetweenCities)(CSV_or_URL, city1, country1, city2, country2).then(function (data) {
        console.log("La distancia entre ".concat(data[0].nombreCiudad, " y ").concat(data[1].nombreCiudad, " es: \n").concat(data[2]));
        console.log("Latitud y longitud de ".concat(data[0].nombreCiudad, " from ").concat(data[0].nombrePais, ": ").concat(data[0].latitud, " y ").concat(data[0].longitud));
        console.log("Latitud y longitud de ".concat(data[1].nombreCiudad, " from ").concat(data[1].nombrePais, ": ").concat(data[1].latitud, " y ").concat(data[1].longitud));
    }).catch(function (error) {
        console.log("Error: ".concat(error));
    });
}
function CordsCity(CSV_or_URL, country, city) {
    (0, Module2_1.CityPosition)(CSV_or_URL, country, city).then(function (data) {
        console.log("Nombre del pa\u00EDs: ".concat(data.nombrePais));
        console.log("Nombre de la ciudad: ".concat(data.nombreCiudad));
        console.log("Latitud: ".concat(data.latitud));
        console.log("Longitud: ".concat(data.longitud));
    }).catch(function (error) {
        console.log("Error: ".concat(error));
    });
}
