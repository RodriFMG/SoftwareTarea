
// El abstract permite lo mismo que el polimosfirmo con las clases virtuales en c++
export abstract class CityClass{

    // Tanto los métodos como atributos de la clase pueden ser abstractos.
    abstract latitud : number;
    abstract longitud : number;

    protected constructor() {}
    abstract LoadInfoCity(RutaCSV_or_URL : string, CityName : string) : Promise<void>;

}