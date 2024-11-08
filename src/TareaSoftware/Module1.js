"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceBetweenCities = DistanceBetweenCities;
var Module2_1 = require("./Module2");
var r = 6378.1; // radio de la tierra en km (ecuatorial)
function RestaAbsolute(n1, n2) {
    return Math.abs(n1 - n2);
}
// Método Haversine.
function CalculateDistance(l1, a1, l2, a2) {
    return (2 * r * Math.asin(Math.sqrt(Math.pow(Math.sin(RestaAbsolute(l1, l2) / 2), 2) +
        Math.cos(l1) * Math.cos(l2) *
            Math.pow(Math.sin(RestaAbsolute(a1, a2) / 2), 2))));
}
function DistanceBetweenCities(CSV_or_URL, c1, p1, c2, p2) {
    return __awaiter(this, void 0, void 0, function () {
        var v1, v2, distance, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    // igual que el reject y resolve del return new Promise (usarlo si mi función no tiene await :b).
                    if (c1 === c2)
                        throw new Error("Debe colocar 2 ciudades distintas para el cálculo.");
                    return [4 /*yield*/, (0, Module2_1.CityPosition)(CSV_or_URL, p1, c1)];
                case 1:
                    v1 = _a.sent();
                    return [4 /*yield*/, (0, Module2_1.CityPosition)(CSV_or_URL, p2, c2)];
                case 2:
                    v2 = _a.sent();
                    distance = CalculateDistance(v1.latitud, v1.longitud, v2.latitud, v2.longitud);
                    // .toFixed(2) para redondear a 2 decimales.
                    return [2 /*return*/, [v1, v2, parseFloat(distance.toFixed(2))]];
                case 3:
                    error_1 = _a.sent();
                    // El throw sirve para rescatar errores.
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
