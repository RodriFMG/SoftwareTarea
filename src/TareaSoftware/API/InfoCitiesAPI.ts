import {FetchApi} from './fetch'
import {CityClass} from '../Polimorfismo/CityClass'

export class InfoCitiesAPI extends CityClass{

    // ponerlas afuera es lo mismo que ponerlas como publicas (no las pongo privadas xq las voy a usar dps y quiero un
    // acceso directo :b).
    latitud : number;
    longitud : number;

    constructor(){

        super();
        this.latitud = 0;
        this.longitud = 0;
    }

    public async LoadInfoCity(URL : string, CityName : string) : Promise<void>{

        return new Promise((resolve, reject) => {

            FetchApi(URL).then(data =>{

                if(!data) reject("Error en el URL de la API, datos no encontrados.")

                if (!Array.isArray(data) || data.length === 0) {
                    return reject("Error: la API devolvió una estructura de datos inesperada o vacía.");
                }

                let cityFound = false;
                data.forEach(city => {

                    if(city.name.toLowerCase().trim() === CityName.toLowerCase().trim()){
                        this.latitud = Number(city.lat);
                        this.longitud = Number(city.lon);
                        cityFound = true;
                    }

                })

                if(!cityFound) reject("No se econtró la ciudad" +
                    ` ${CityName} en la API`)
                else resolve();


            }).catch(error => {
                reject("Error en el URL de la API, datos no encontrados.");
            });

        })

    }

}