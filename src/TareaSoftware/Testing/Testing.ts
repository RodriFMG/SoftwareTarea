import { CityPosition } from '../Module2';
import { DistanceBetweenCities } from '../Module1';

function AssertTrue<T>(valorEsperado: T[], valorReal: T[]): boolean {
    return JSON.stringify(valorEsperado) === JSON.stringify(valorReal);
}
async function ValidateCords(CSV_API: string, country: string, city: string, lat: number, lon: number) {

    const cityCords = await CityPosition(CSV_API, country, city);

    const l1 = cityCords.latitud;
    const l2 = cityCords.longitud;

    if (AssertTrue([l1, l2], [lat, lon])) {
        console.log("Caso exitoso!");
    } else {
        throw new Error(`Fallo en el caso de ${city}`);
    }
}

async function validateDistance(CSV_API : string, city1 : string, pais1 : string
                                , city2 : string, pais2 : string , distance : number){

    const dist = await DistanceBetweenCities(CSV_API, city1, pais1, city2, pais2);

    if(AssertTrue([dist[2]], [distance])){
        console.log("Caso Exitoso!")
    }
    else{
        throw new Error(`Error en el caso de ${city1} y ${city2}`)
    }
}


export async function TestingCords(CSV_API: string) {
    console.log("Testing de las coordenadas de varias ciudades:");

    try {
        if (CSV_API.endsWith('.csv')) {

            console.log('Case 1, Inglaterra: ');
            await ValidateCords(CSV_API, "Inglaterra", "London", 39.8935, -83.4375);

            console.log('Case 2, Mumbai: ');
            await ValidateCords(CSV_API, "India", "Mumbai", 19.0761, 72.8775);

            console.log('Case 3, Mouvaux: ');
            await ValidateCords(CSV_API, "Francia", "Mouvaux", 50.7033, 3.1406);

            console.log('Case 4, Lang Suan: ');
            await ValidateCords(CSV_API, "Tailandia", "Lang Suan", 9.95, 99.0667);

            console.log('Case 5, Cabanillas del Campo: ');
            await ValidateCords(CSV_API, "España", "Cabanillas del Campo", 40.6383, -3.2353);

        } else {

            console.log('Case 1, Lima: ');
            await ValidateCords(CSV_API, "Peru", "Lima", -12.0002116, -76.8330796);

            console.log('Case 2, Lima Metropolitana')
            await ValidateCords(CSV_API, "Peru", "Lima Metropolitana", -12.0621065, -77.0365256);

        }
    }catch (err) {
        throw new Error(err);
    }

}


export async function TestingDistance(CSV_API : string){

    try{

        if(CSV_API.endsWith('.csv')){

            console.log('Case 1, London y Mumbai')
            await validateDistance(CSV_API, 'London', 'Alemania', 'Mumbai', 'India',
                11487.77);

            console.log('Case 2, Maraial y Two Rivers')
            await validateDistance(CSV_API, 'Enfida', 'Túnez', 'Two Rivers', 'EE.UU.',
                11167.18);

            console.log('Case 3, Joquicingo y Mineral de Angangueo')
            await validateDistance(CSV_API, 'Joquicingo', 'México', 'Mineral de Angangueo',
                'México', 5403.58)

            console.log('Case 4, Lorch y Biganos')
            await validateDistance(CSV_API, 'Iloilo', 'Filipinas',
                'Pokaran', 'India', 16939.01)

            console.log('Case 5, Delhi y Narsarsuaq')
            await validateDistance(CSV_API, 'Delhi', 'India', 'Narsarsuaq', 'Groenlandia'
                , 9040.06)

        }
        else{

            console.log('Case 1, Lima Metropolitana y Lima')
            await validateDistance(CSV_API, 'Lima Metropolitana', 'Peru', 'Lima', 'Peru',
                1183.08)

        }

    }catch (err){
        throw new Error(err)
    }

}

// "https://nominatim.openstreetmap.org/search?q=lima,peru&format=json"
// "../CSV/worldcities.csv"
