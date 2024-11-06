import {CordsCity} from '../Metodos/DistanciaCords'
import {TestingCords} from '../Testing/Testing'

async function main(){

    await TestingCords("https://nominatim.openstreetmap.q=lima,peru&format=json").then(() => {
        console.log("Todas las pruebas completadas.\n\n");
    }).catch(err => {
        console.error("Error en el testing:", err);
    });

// Lo puse con todo y country xq en el csv no se podía acceder al nombre del país :(. Puse el input mal para probar
    // el manejo de errores :b.
    await CordsCity("https://nominatim.openstreetmap.org/search?q=lima,peru&format=json", "Peru", "Lima Metropolitana");

}

main();