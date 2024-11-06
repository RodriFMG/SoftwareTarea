import {DistanceCities} from '../Metodos/DistanciaCords'
import {TestingDistance} from '../Testing/Testing';

async function main(){

    await TestingDistance("./worldcities.csv").then(() => {
        console.log("Todas las pruebas completadas.\n\n");
    }).catch(err => {
        console.error("Error en el testing:", err);
    });


    // Coloque los input mal para probar los manejo de errores.
    await DistanceCities("./worldcitie.csv", 'London', 'Alemania', 'Mumbai', 'India');

}

main();