import {InfoCitiesCSV} from './CSV/InfoCitiesCSV';
import {InfoCitiesAPI} from './API/InfoCitiesAPI'
import {CityClass} from './Polimorfismo/CityClass'

interface Coordenada {
    latitud: number;
    longitud: number;
}

export interface Ciudad extends Coordenada {
    nombrePais: string;
    nombreCiudad: string;
}

function funcionooooo(RutaCSV_or_URL : string) : CityClass{

    // El endsWith es un método de los string no una función global de node :b.
    if(RutaCSV_or_URL.endsWith('.csv')){
        return new InfoCitiesCSV();
    }
    else{
        return new InfoCitiesAPI();
    }

}

export async function CityPosition(RutaCSV_or_URL: string, nombrePais: string, nombreCiudad: string): Promise<Ciudad> {



    const InfoCity =  funcionooooo(RutaCSV_or_URL);

    await InfoCity.LoadInfoCity(RutaCSV_or_URL, nombreCiudad).catch(err => {
            throw new Error(err);
    });

    return {
            latitud: InfoCity.latitud,
            longitud: InfoCity.longitud,
            nombrePais: nombrePais,
            nombreCiudad: nombreCiudad,
    };


}
