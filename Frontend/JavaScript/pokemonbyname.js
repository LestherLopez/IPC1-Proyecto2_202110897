async function pokemonbyname(){
    document.getElementById('pokemon_container').innerHTML='';
  
    let url = 'http://localhost:4000/pokemon-por-nombre';
    var PokemonName = document.getElementById('Pokemon').value;
   
  
    const respuestas  = await fetch(url,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
            "namep": PokemonName}), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data =>  { return data
    })
    creationCard(respuestas)

}
function creationCard(pokemon){
    
    const pokemon_container = document.querySelector(".pokemon_container")
    
    const card = document.createElement("div");
    card.classList.add("pokemon-block");
  
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");
  
    const sprite = document.createElement("img");
    sprite.src = pokemon.Imagen
  
    spriteContainer.appendChild(sprite);  
  
    const Numero = document.createElement("p");
    Numero.textContent = `#${pokemon.Numero}`;
  
    const Nombre = document.createElement("p");
    Nombre.classList.add("Nombre");
    Nombre.textContent = pokemon.Nombre;
  
    const Tipo = document.createElement("p");
    Tipo.classList.add("Tipo");
    Tipo.textContent = pokemon.Tipo;
  
    const Ataque = document.createElement("p");
    Ataque.classList.add("Ataque");
    Ataque.textContent = pokemon.Ataque;
  
    card.appendChild(spriteContainer);
    card.appendChild(Numero);
    card.appendChild(Nombre);
    card.appendChild(Tipo);
    card.appendChild(Ataque);
  
    pokemon_container.appendChild(card);  
   
  }
