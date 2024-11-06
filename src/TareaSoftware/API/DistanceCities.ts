import {DistanceCities} from '../Metodos/DistanciaCords'
import {TestingDistance} from '../Testing/Testing';

async function main(){

    await TestingDistance("https://nominatim.openstreetmap.org/search?q=lima,peru&format=json").then(() => {
        console.log("Todas las pruebas completadas.\n\n");
    }).catch(err => {
        console.error("Error en el testing:", err);
    });

// Lo puse con todo y country xq en el csv no se podía acceder al nombre del país :(. /z/
    await DistanceCities("https://nominatim.org/search?q=lima,peru&format=json"
        , "Lima Metropolitana", "Peru", "Lima", "Peru")

}

main();