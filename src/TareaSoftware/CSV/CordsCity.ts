import {CordsCity} from '../Metodos/DistanciaCords'
import {TestingCords} from '../Testing/Testing';

async function main(){

    await TestingCords("./worldcitises.csv").then(() => {
        console.log("Todas las pruebas completadas.");
    }).catch(err => {
        console.error("Error en el testing:", err);
    });

    await CordsCity("./worldcitie.csv", "España",
        "Lima");

}

main();