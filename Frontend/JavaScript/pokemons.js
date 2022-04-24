function pokemon(id){
    let url = 'http://localhost:4000/pokemons'
      fetch(url)
          .then(response => response.json())
          .then(data => mostrarData(data))
          .catch(error => console.log(error))
    
      const mostrarData=(data) => {
            creationCard(data[id]);
          };       
    }

function Index(Number){
    document.getElementById('pokemon_container').innerHTML='';
    document.getElementById('pokemon_container').style.backgroundColor = '#46444e';
    for(let i=0; i<Number; i++){
        pokemon(i);
    }
}

function creationCard(pokemon){
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