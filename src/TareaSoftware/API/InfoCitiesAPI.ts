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

                data.forEach(city => {

                    if(city.name.toLowerCase().trim() === CityName.toLowerCase().trim()){
                        this.latitud = Number(city.lat);
                        this.longitud = Number(city.lon);

                        resolve();
                    }

                })

            }).catch(error => {
                reject(error);
            });

        })

    }

}