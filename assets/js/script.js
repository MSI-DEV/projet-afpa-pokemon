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

const container = document.createElement("div");
container.classList.add("container")
      document.body.appendChild(container);
      let img = document.querySelectorAll(".recherche");
      console.log(img.recherche)
const select = document.createElement('select');
      select.setAttribute("id","select");
      select.classList.add("select")
      container.appendChild(select)
    let option = document.createElement("option");
          option.innerText = " ----Sélectionnez un Pokémon----"
          option.value = 0
          option.setAttribute("selected", true)
          select.appendChild(option)
            console.log("Sélectionnez un Pokémon")
            dataFetch.forEach( (pokemon) => {
          option = document.createElement("option");
          option.innerText = pokemon.name
console.log("pokemon :", pokemon);
select.appendChild(option)
    
});
let selectPokemonImg = document.createElement("img")
    selectPokemonImg.classList.add("affichage-pokemon")
    container.appendChild(selectPokemonImg)
    select.addEventListener("change",() => {
        if (select == 0) {
            // option.innerText ="Pokémon non sélectionner"
            
        }
        else {
            console.log("selection :" , select.value)
            let imgPokemon = dataFetch.find((unPokemon) => unPokemon.name == select.value)
            selectPokemonImg.setAttribute("src", imgPokemon.image)
            selectPokemonImg.style.display = "block"
        }
    } )
           



























// select.addEventListener('click', ()=>{
// //     const selectedPokemon =  ('Sélectionnez un Pokémon (entrez un nom de Pokémon' + dataFetch.length + ' )');
    
// //     if(selectedPokemon && selectedPokemon >= 1 && selectedPokemon <= dataFetch.length){
// //     const chosenPokemon = dataFetch[selectedPokemon -1];
// //     console.log("Vous avez choisi :", chosenPokemon);   
// //     }
// //     else{
// //         console.log("Pokémon invalide. Veuillez entrer un nom de Pokémon" + dataFetch.length);
// //     }
// });

