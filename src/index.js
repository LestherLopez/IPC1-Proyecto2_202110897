const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { type } = require('express/lib/response');


const app = express();
app.set('port',4000);

app.use(morgan('dev')); 
app.use(express.json());
app.use(cors())
//Endpoint obtener usuarios
app.get('/usuarios',(req,res)=>{
    var db = require('./usuarios.json');
    res.send(db);
})
//Endpoint obtener pokemons
app.get('/pokemons',(req,res)=>{
    var db = require('./pokemons.json');
    res.send(db);
})
//Endpoint obtener pokemons por numero
app.post('/pokemon-por-numero',(req,res)=>{
    console.log(req.body);
   var numerop = req.body.numerop;
    var pokedex = require('./pokemons.json');
    let apply = pokedex.find(elemento => elemento.Numero==numerop);
    if (apply!=null){
        res.send(apply); 
    }
    else{
        res.send({Mensaje:"Error"});
    }
    
}) 
//Endpoint obtener pokemons por nombre
app.post('/pokemon-por-nombre',(req,res)=>{
    console.log(req.body);
   var namep = req.body.namep;
    var pokedex = require('./pokemons.json');
    let apply = pokedex.find(elemento => elemento.Nombre==namep);
    if (apply!=null){
        res.send(apply); 
    }
    else{
        res.send({Mensaje:"Error"});
    }
    
}) 
//Endpoint obtener pokemons por tipo
app.post('/pokemon-por-tipo',(req,res)=>{
    console.log(req.body);
    var typep = req.body.typep;
    var pokedex = require('./pokemons.json');
    if(typep=="Agua" || typep=="agua"){
       var pwater = [
        {
            "Numero": 54,
            "Nombre": "Psyduck",
            "Tipo":"Agua",
            "Imagen":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
            "Ataque":"Hidrochorro"
        },
        {
            "Numero": 501,
            "Nombre": "Oshawott",
            "Tipo":"Agua",
            "Imagen":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
            "Ataque":"Cascada"
        },
        {
            "Numero": 183,
            "Nombre": "Marill",
            "Tipo":"Agua",
            "Imagen":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
            "Ataque":"Hidrobomba"
        },
        {
            "Numero": 61,
            "Nombre": "Poliwhirl",
            "Tipo":"Agua",
            "Imagen":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
            "Ataque":"Puño hielo"
        },
        {
            "Numero": 7,
            "Nombre": "Squirtle",
            "Tipo": "Agua",
            "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            "Ataque": "Aqua cola"
        }

       ];
      res.send(pwater);
    }  
    else if(typep=="Fuego" || typep=="fuego"){
        var pfire = [
            {
                "Numero": 4,
                "Nombre": "Charmander",
                "Tipo": "Fuego",
                "Imagen":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                "Ataque": "Lanzallamas"
            },
            {
                "Numero": 6,
                "Nombre": "Charizard",
                "Tipo": "Fuego",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
                "Ataque": "Sofoco"
            },
            {
                "Numero": 155,
                "Nombre": "Cyndaquil",
                "Tipo": "Fuego",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
                "Ataque": "Ascuas"
            },
            {
                "Numero": 255,
                "Nombre": "Torchic",
                "Tipo": "Fuego",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
                "Ataque": "Arañazo"
            },
            {
                "Numero": 667,
                "Nombre": "Litleo",
                "Tipo": "Fuego",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
                "Ataque": "Colmillo Igneo"
            }

        ]
        res.send(pfire);
    }
    else if(typep=="Hierba" || typep=="hierba"){
        var pgrass = [
            {
                "Numero": 1,
                "Nombre": "Bulbasaur",
                "Tipo": "Hierba",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                "Ataque": "Bomba Lodo"
            },
            {
                "Numero": 252,
                "Nombre": "Treecko",
                "Tipo": "Hierba",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
                "Ataque": "Hierba lazo"
            },
            {
                "Numero": 103,
                "Nombre": "Exeggutor",
                "Tipo": "Hierba",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
                "Ataque": "Rayo solar"
            },
            {
                "Numero": 331,
                "Nombre": "Cacnea",
                "Tipo": "Hierba",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
                "Ataque": "Golpe bajo"
            },
            {
                "Numero": 44,
                "Nombre": "Gloom",
                "Tipo": "Hierba",
                "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
                "Ataque": "Tormenta floral"
            }
        ]
        res.send(pgrass);
    }
    else{
        res.send({Mensaje:"Error"});
    }
}) 

app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: 4000');
})