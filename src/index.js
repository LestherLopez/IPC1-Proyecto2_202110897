const express = require('express');
const app = express();
app.set('port',4000);

app.get('/home',(req,res)=>{
    res.send('Holaaa!!!!!');
})

app.get('/pokedex',(req,res)=>{
 //   let pokedex = require('./pokedex.json');
    res.send('pokedex!!!!');
});

app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: 4000');
})