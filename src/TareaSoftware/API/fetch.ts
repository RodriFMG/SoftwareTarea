
export async function  FetchApi(url : string) : Promise<any>{


    try{
        const response = await fetch(url);

        if(!response.ok) throw new Error(`Error en la petición. ${response.status}`);

        return await response.json();
    }catch (error){
        throw error;
    }

}