import {CityPosition, Ciudad} from './Module2'

const r : number = 6378.1; // radio de la tierra en km (ecuatorial)

function RestaAbsolute(n1 : number, n2 : number) : number {

    return Math.abs(n1 - n2);

}

// Método Haversine.
function CalculateDistance(l1 : number, a1 : number,
                                 l2 : number, a2 : number) : number {

    return (2 * r * Math.asin(Math.sqrt(
            Math.pow(Math.sin(RestaAbsolute(l1, l2) / 2), 2) +
            Math.cos(l1) * Math.cos(l2) *
            Math.pow(Math.sin(RestaAbsolute(a1, a2) / 2), 2)
        ))
    );

}

export async function DistanceBetweenCities(CSV_or_URL : string,
                                     c1 : string, p1 : string,
                                     c2 : string, p2: string) : Promise<[Ciudad, Ciudad, number]>{

    try{ // No se puede usar await dentro de un new Promise, así que usar mejor try catch ;-;. En si el try catch funcionaría
        // igual que el reject y resolve del return new Promise (usarlo si mi función no tiene await :b).

        if(c1 === c2) throw new Error("Debe colocar 2 ciudades distintas para el cálculo.");

        const v1 = await CityPosition(CSV_or_URL, p1, c1);
        const v2 = await CityPosition(CSV_or_URL, p2, c2);

        const distance : number = CalculateDistance( v1.latitud, v1.longitud, v2.latitud, v2.longitud);

        // .toFixed(2) para redondear a 2 decimales.
        return [v1, v2, parseFloat(distance.toFixed(2))];

    }catch (error){

        // El throw sirve para rescatar errores.
        throw error;
    }

}