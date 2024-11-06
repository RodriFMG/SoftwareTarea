## Precondiciones
- Que la API de Ciudades esté funcional en el momento de testear.
- El archivo CSV tiene que estar correctamente ubicado en los directorios correspondientes para que funcione correctamente en la lectura por directorio.


## TestCase

| **Test Case**          | Coordenadas de una ciudad en un CSV                                       |
|------------------------|---------------------------------------------------------------------------|
| **Precondición**       | La ruta del CSV debe estar bien colocada.                                 |
| **Test Steps**         | 1. Colocar la ruta del URL<br>2. Colocar el país de la ciudad<br>3. Colocar el nombre de la ciudad |
| **Test Data**          | CSV: `./worldcities.csv`<br>País: `India`<br>Ciudad: `Mumbai`            |
| **Expected Result**    | Todas las pruebas completadas.<br>Nombre del país: `India`<br>Nombre de la ciudad: `Mumbai`<br>Latitud: `19.0761`<br>Longitud: `72.8775` |



![image](https://github.com/user-attachments/assets/dd812e09-6e80-4856-a82d-d31abc7b2e18)

## TestCase

| Test Case                          | Coordenadas de una ciudad no existente en un CSV                                                                 |
|------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Precondición**                   | La ruta del CSV debe estar bien colocada.                                                           |
| **Test Steps**                     | 1. Colocar la ruta del URL                                                                          |
|                                    | 2. Colocar el país de la ciudad                                                                     |
|                                    | 3. Colocar el nombre de la ciudad                                                                   |
| **Test Data**                      | CSV: `./worldcities.csv`<br>Pais: `India`<br>Ciudad: `Mumba`                                      |
| **Expected Result**                | Error: No se encontró la ciudad Mumba en el CSV
 |
![image](https://github.com/user-attachments/assets/c7d9a1e2-402a-4e32-85fb-229742138edf)
