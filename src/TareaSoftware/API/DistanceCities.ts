import {DistanceCities} from '../Metodos/DistanciaCords'

// Lo puse con todo y country xq en el csv no se podía acceder al nombre del país :(.
DistanceCities("https://nominatim.openstreetmap.org/search?q=lima,peru&format=json"
    , "Lima Metropolitana", "Peru", "Lima", "Peru")