import express from "express";
import fs from 'fs';

const app = express();
const port = 3000;

const productosPath = './files/Productos.json';

app.use(express.json());

app.get('/productos', (req, res) => {
  const productos = obtenerProductos();
  res.json(productos);
});

app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productos = obtenerProductos();
  const producto = productos.find((p) => p.id === id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

function obtenerProductos() {
  if (fs.existsSync(productosPath)) {
    const data = fs.readFileSync(productosPath, 'utf-8');
    const productos = JSON.parse(data);
    return productos;
  } else {
    return [ "Estos son los productos"];
  }
}

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
