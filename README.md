## Precondiciones
- Que la API de Ciudades esté funcional en el momento de testear.
- El archivo CSV tiene que estar correctamente ubicado en el directorio correspondientes para que funcione correctamente en la lectura por directorio.


## TestCase

### Coordenadas con el CSV
| **Test Case**          | Coordenadas de una ciudad en un CSV                                       |
|------------------------|---------------------------------------------------------------------------|
| **Precondición**       | La ruta del CSV debe estar bien colocada.                                 |
| **Test Steps**         | 1. Colocar la ruta del CSV<br>2. Colocar el país de la ciudad<br>3. Colocar el nombre de la ciudad |
| **Test Data**          | CSV: `./worldcities.csv`<br>País: `India`<br>Ciudad: `Mumbai`            |
| **Expected Result**    | <br>Nombre del país: `India`<br>Nombre de la ciudad: `Mumbai`<br>Latitud: `19.0761`<br>Longitud: `72.8775` |



![image](https://github.com/user-attachments/assets/dd812e09-6e80-4856-a82d-d31abc7b2e18)


| Test Case                          | Coordenadas de una ciudad no existente en un CSV                                                                 |
|------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Precondición**                   | La ruta del CSV debe estar bien colocada.                                                           |
| **Test Steps**                     | 1. Colocar la ruta del CSV                                                                          |
|                                    | 2. Colocar el país de la ciudad                                                                     |
|                                    | 3. Colocar el nombre de la ciudad                                                                   |
| **Test Data**                      | CSV: `./worldcities.csv`<br>Pais: `India`<br>Ciudad: `Mumba`                                      |
| **Expected Result**                | Error: No se encontró la ciudad Mumba en el CSV
 |
![image](https://github.com/user-attachments/assets/c7d9a1e2-402a-4e32-85fb-229742138edf)

### Coordenadas con la API

| Test Case                          | Coordenadas de una ciudad existente en la API                                                                |
|------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Precondición**                   | La API debe estar funcionando correctamente.                                                         |
| **Test Steps**                     | 1. Colocar el enlace URL de la API                                                                          |
|                                    | 2. Colocar el país de la ciudad                                                                     |
|                                    | 3. Colocar el nombre de la ciudad                                                                   |
| **Test Data**                      | API: `https://nominatim.openstreetmap.org/search?q=lima,peru&format=json`<br>Pais: `Peru`<br>Ciudad: `Lima Metropolitana`                                      |
| **Expected Result**                | <br>Nombre del país: `Peru`<br>Nombre de la ciudad: `Lima Metropolitana`<br>Latitud: `-12.0621065`<br>Longitud: `-77.0365256`
 |

![image](https://github.com/user-attachments/assets/b36d79b8-844e-4305-8fc6-e148c42d6dac)

| Test Case                          | Coordenadas de una ciudad no existe en la API                                                                |
|------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Precondición**                   | La API debe estar funcionando correctamente.                                                         |
| **Test Steps**                     | 1. Colocar el enlace URL de la API                                                                         |
|                                    | 2. Colocar el país de la ciudad                                                                     |
|                                    | 3. Colocar el nombre de la ciudad                                                                   |
| **Test Data**                      | API: `https://nominatim.openstreetmap.org/search?q=lima,peru&format=json`<br>Pais: `Peru`<br>Ciudad: `Lima Metropolitan`                                      |
| **Expected Result**                | Error: No se econtró la ciudad Lima Metropolitan en la API
 |

![image](https://github.com/user-attachments/assets/fa485e4f-54f5-403a-bc9a-6e7d48138814)


### Distancia entre ciudades con el CSV

| Test Case             | Distancia entre ciudades en el CSV                                       |
|-----------------------|--------------------------------------------------------------------------|
| **Precondición**      | La ruta del CSV debe estar bien colocada.                                |
| **Test Steps**        | 1. Colocar la ruta del CSV                                               |
|                       | 2. Colocar el nombre de la ciudad 1                                      |
|                       | 3. Colocar el país de la ciudad 1                                        |
|                       | 4. Colocar el nombre de la ciudad 2                                      |
|                       | 5. Colocar el país de la ciudad 2                                        |
| **Test Data**         | CSV: `./worldcities.csv`<br>Ciudad1: `Mumbai`<br>País1: `India`<br>Ciudad2: `London`<br>País2: `Alemania` |
| **Expected Result**   | La distancia entre Mumbai y London es: 11487.77.<br>Latitud y longitud de Mumbai en India: 19.0761 y 72.8775<br>Latitud y longitud de London en Alemania: 39.8935 y -83.4375 |

![image](https://github.com/user-attachments/assets/f9d8c07c-50c8-4ae1-add9-0d7be1e84f8c)

| Test Case             | Distancia entre ciudad en las que almenos una no exista en el CSV                                       |
|-----------------------|--------------------------------------------------------------------------|
| **Precondición**      | La ruta del CSV debe estar bien colocada.                                |
| **Test Steps**        | 1. Colocar la ruta del CSV                                               |
|                       | 2. Colocar el nombre de la ciudad 1                                      |
|                       | 3. Colocar el país de la ciudad 1                                        |
|                       | 4. Colocar el nombre de la ciudad 2                                      |
|                       | 5. Colocar el país de la ciudad 2                                        |
| **Test Data**         | CSV: `./worldcities.csv`<br>Ciudad1: `Mumbai`<br>País1: `India`<br>Ciudad2: `Londn`<br>País2: `Alemania` |
| **Expected Result**   | Error: No se encontró la ciudad Londn en el CSV. |

![image](https://github.com/user-attachments/assets/d2339ca3-fc10-4713-a633-a248522b0de4)

| Test Case             | Distancia entre ciudad con el mismo nombre en el CSV                                       |
|-----------------------|--------------------------------------------------------------------------|
| **Precondición**      | La ruta del CSV debe estar bien colocada.                                |
| **Test Steps**        | 1. Colocar la ruta del CSV                                               |
|                       | 2. Colocar el nombre de la ciudad 1                                      |
|                       | 3. Colocar el país de la ciudad 1                                        |
|                       | 4. Colocar el nombre de la ciudad 2                                      |
|                       | 5. Colocar el país de la ciudad 2                                        |
| **Test Data**         | CSV: `./worldcities.csv`<br>Ciudad1: `Mumbai`<br>País1: `India`<br>Ciudad2: `Mumbai`<br>País2: `India` |
| **Expected Result**   | Error: Debe colocar 2 ciudades distintas para el cálculo. |

![image](https://github.com/user-attachments/assets/538b45fd-c529-4759-959b-97b58b93fa74)

### Distancia entre ciudades con la API

| Test Case             | Distancia entre ciudades con la API                                    |
|-----------------------|--------------------------------------------------------------------------|
| **Precondición**      | La API debe estar funcionando correctamente.                                 |
| **Test Steps**        | 1. Colocar el enlace URL de la API                                              |
|                       | 2. Colocar el nombre de la ciudad 1                                      |
|                       | 3. Colocar el país de la ciudad 1                                        |
|                       | 4. Colocar el nombre de la ciudad 2                                      |
|                       | 5. Colocar el país de la ciudad 2                                        |
| **Test Data**         | API: `https://nominatim.openstreetmap.org/search?q=lima,peru&format=json`<br>Ciudad1: `Lima Metropolitana`<br>País1: `Peru`<br>Ciudad2: `Lima`<br>País2: `Peru` |
| **Expected Result**   | La distancia entre Mumbai y London es: 1183.08.<br>Latitud y longitud de Lima Metropolitana en Peru: -12.0621065 y -77.0365256<br>Latitud y longitud de Lima en Peru: -12.0002116 y  -76.8330796 |

![image](https://github.com/user-attachments/assets/513842a9-7e5f-4f0d-8055-60861b1bc657)

| Test Case             |Distancia entre ciudad en las que almenos una no exista en la API                                   |
|-----------------------|--------------------------------------------------------------------------|
| **Precondición**      | La API debe estar funcionando correctamente.                                 |
| **Test Steps**        | 1. Colocar el enlace URL de la API                                              |
|                       | 2. Colocar el nombre de la ciudad 1                                      |
|                       | 3. Colocar el país de la ciudad 1                                        |
|                       | 4. Colocar el nombre de la ciudad 2                                      |
|                       | 5. Colocar el país de la ciudad 2                                        |
| **Test Data**         | API: `https://nominatim.openstreetmap.org/search?q=lima,peru&format=json`<br>Ciudad1: `Lima Metropolitana`<br>País1: `Peru`<br>Ciudad2: `Lima`<br>País2: `Peru` |
| **Expected Result**   | La distancia entre Mumbai y London es: 1183.08.<br>Latitud y longitud de Lima Metropolitana en Peru: -12.0621065 y -77.0365256<br>Latitud y longitud de Lima en Peru: -12.0002116 y  -76.8330796 |


