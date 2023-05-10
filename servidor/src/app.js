import express from "express";

const app = express (); 

app.get('/products', (req, res) =>{
    res.send(`<h1 style= "color:red;"> Bienvenido a express </h1>`)
});

app.listen (8080, () => console.log ('listening 8080'));

