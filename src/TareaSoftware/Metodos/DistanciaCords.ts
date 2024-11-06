import {CityPosition} from '../Module2'
import {DistanceBetweenCities} from '../Module1'


export function DistanceCities(CSV_or_URL : string, city1 : string, country1 : string, city2 : string, country2 : string) : void {
    DistanceBetweenCities(CSV_or_URL, city1, country1, city2, country2).then(data =>{
        console.log(`La distancia entre ${data[0].nombreCiudad} y ${data[1].nombreCiudad} es: \n${data[2]}`)

        console.log(`Latitud y longitud de ${data[0].nombreCiudad} from ${data[0].nombrePais}: ${data[0].latitud} y ${data[0].longitud}`)
        console.log(`Latitud y longitud de ${data[1].nombreCiudad} from ${data[1].nombrePais}: ${data[1].latitud} y ${data[1].longitud}`)


    }).catch(error => {
        console.log(`${error}`)
    })
}

export function CordsCity(CSV_or_URL : string, country : string, city : string) : void {
    CityPosition(CSV_or_URL, country, city).then( data =>{
            console.log(`Nombre del país: ${data.nombrePais}`);
            console.log(`Nombre de la ciudad: ${data.nombreCiudad}`);
            console.log(`Latitud: ${data.latitud}`);
            console.log(`Longitud: ${data.longitud}`);
        }
    ).catch(error => {
        console.log(`${error}`)
    });
}


