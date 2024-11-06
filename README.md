## Precondiciones
- Que la API de Ciudades esté funcional en el momento de testear.
- El archivo CSV tiene que estar correctamente ubicado en los directorios correspondientes para que funcione correctamente en la lectura por directorio.


## TestCase

| **Test Case**          | Coordenadas de una ciudad en un CSV                                       |
|------------------------|---------------------------------------------------------------------------|
| **Precondición**       | La ruta del CSV debe estar bien colocada.                                 |
| **Test Steps**         | 1. Colocar la ruta del URL<br>2. Colocar el país de la ciudad<br>3. Colocar el nombre de la ciudad |
| **Test Data**          | CSV: `./worldcities.csv`<br>País: `India`<br>Ciudad: `Mumbai`            |
| **Expected Result**    | <br>Nombre del país: `India`<br>Nombre de la ciudad: `Mumbai`<br>Latitud: `19.0761`<br>Longitud: `72.8775` |



![image](https://github.com/user-attachments/assets/dd812e09-6e80-4856-a82d-d31abc7b2e18)


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


| Test Case                          | Coordenadas de una ciudad existente en la API                                                                |
|------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Precondición**                   | La API debe estar funcionando correctamente.                                                         |
| **Test Steps**                     | 1. Colocar la ruta del URL                                                                          |
|                                    | 2. Colocar el país de la ciudad                                                                     |
|                                    | 3. Colocar el nombre de la ciudad                                                                   |
| **Test Data**                      | CSV: `./worldcities.csv`<br>Pais: `Peru`<br>Ciudad: `Lima Metropolitana`                                      |
| **Expected Result**                | <br>Nombre del país: `Peru`<br>Nombre de la ciudad: `Lima Metropolitana`<br>Latitud: `-12.0621065`<br>Longitud: `-77.0365256`
 |

![image](https://github.com/user-attachments/assets/b36d79b8-844e-4305-8fc6-e148c42d6dac)

| Test Case                          | Coordenadas de una ciudad no existe en la API                                                                |
|------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Precondición**                   | La API debe estar funcionando correctamente.                                                         |
| **Test Steps**                     | 1. Colocar la ruta del URL                                                                          |
|                                    | 2. Colocar el país de la ciudad                                                                     |
|                                    | 3. Colocar el nombre de la ciudad                                                                   |
| **Test Data**                      | CSV: `./worldcities.csv`<br>Pais: `Peru`<br>Ciudad: `Lima Metropolitan`                                      |
| **Expected Result**                | Error: No se econtró la ciudad Lima Metropolitan en la API
 |

![image](https://github.com/user-attachments/assets/fa485e4f-54f5-403a-bc9a-6e7d48138814)



