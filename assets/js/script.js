console.log("Script chargé !")
let dataFetch;
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon";
await getDataFetch();
async function getDataFetch () {
    const res = await fetch(urlApi);
    dataFetch = await res.json();
}
const getPokemons = async () => {
    try{
        const reponse = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
        const pokemons = await reponse.json();
        return pokemons;
    } catch (error){
        console.log("Echec de la récupération de la liste des pokemons");
    }
}
const displayPokemons = async () => {
    const pokemons = await getPokemons();
    console.log("Pokemons : ", pokemons);
}

displayPokemons();
