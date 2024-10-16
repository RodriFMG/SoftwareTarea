"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DistanciaCords_1 = require("../Metodos/DistanciaCords");
// Lo puse con todo y country xq en el csv no se podía acceder al nombre del país :(.
(0, DistanciaCords_1.CordsCity)("https://nominatim.openstreetmap.org/search?q=lima,peru&format=json", "Peru", "Lima");
