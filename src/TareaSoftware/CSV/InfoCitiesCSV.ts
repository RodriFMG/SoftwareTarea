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
                    reject(err);
                    return;
                }

                const dataFile = data.split('\n');

                dataFile.forEach(City => {

                    const CityInfo = City.split(',');

                    const CityName = CityInfo[1].replace(/"/g, '').toLowerCase().trim();

                    if(CityName === CtNm.toLowerCase().trim()){
                        this.latitud = Number(CityInfo[2].replace(/"/g, ''));
                        this.longitud = Number(CityInfo[3].replace(/"/g, ''));

                        resolve();

                    }

                })

            })

        })

    }
}
