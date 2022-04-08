const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
app.set('port',4000);

app.use(morgan('dev')); 
app.use(express.json());
app.use(cors())


app.get('/home',(req,res)=>{
    res.send('Holaaa!!!!!');
})

app.get('/pokedex',(req,res)=>{
 //   let pokedex = require('./pokedex.json');
    res.send('pokedex!!!!');
});

app.get('/usuarios',(req,res)=>{
    var db = require('./usuarios.json');
    res.send(db);
})

app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: 4000');
})