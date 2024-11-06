import * as fs from 'fs';
import {CityClass} from '../Polimorfismo/CityClass'

export class InfoCitiesCSV extends CityClass{
    latitud: number;
    longitud: number;

    constructor() {

        super();
        this.latitud = 0;
        this.longitud = 0;
    }

    public async LoadInfoCity(RutaCSV : string, CtNm : string) : Promise<void>{

        return new Promise((resolve, reject) => {

            fs.readFile(RutaCSV, 'utf-8', (err, data) => {

                if(err) {
                    reject("La ruta del CSV es incorrecta.");
                    return;
                }

                const dataFile = data.split('\n');

                let cityFound = false;
                dataFile.forEach(City => {

                    const CityInfo = City.split(',');

                    const CityName = CityInfo[1].replace(/"/g, '').toLowerCase().trim();

                    if(CityName === CtNm.toLowerCase().trim()){

                        this.latitud = Number(CityInfo[2].replace(/"/g, ''));
                        this.longitud = Number(CityInfo[3].replace(/"/g, ''));
                        cityFound = true;

                    }


                })

                if(!cityFound) reject(`No se encontró la ciudad ${CtNm} en el` +
                    " CSV.");
                else resolve();


            })

        })

    }
}
