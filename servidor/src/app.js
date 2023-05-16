import express from 'express';
import fs from 'fs';
import ProductManager from './ProductManager.js';


import ProductManager from './Desafio3/ProductManager.js';

const manager = new ProductManager();

const Carrito = async () => {
    let product1 = {
        title: 'Samsung',
        description: 'telefono',
        price: 580,
        thumbnail: 'sin imagen',
        code: 105,
        stock: 3,
    };

    let product2 = {
        title: 'iphone',
        description: 'telefono',
        price: 500,
        thumbnail: 'sin imagen',
        code: 125,
        stock: 2,
    };

    let product3 = {
        title: 'Kindle',
        description: 'Leer',
        price: 550,
        thumbnail: 'sin imagen',
        code: 130,
        stock: 1,
    };

    await manager.crearProductos(product1);
    await manager.crearProductos(product2);
    await manager.crearProductos(product3);

    let result = await manager.mostrarProductos();

    console.log(result);
};

Carrito();

const app = express();

const productManager = new ProductManager();

app.get('/products', async (req, res) => {
  try {
    const products = await productManager.mostrarProductos();

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occur' });
  }
});

    const port = 8080; 
    app.listen(port, () => {
         console.log(`listening to port ${port}`);
});

