import fs from 'fs';
	

	export default class ProductManager{

        constructor() {
            this.producto
            this.path= './files/Productos.json';
        }
	    
        crearProductos = async (producto) =>{
	        const products = await this.mostrarProductos();
	

	        if(products.length === 0){
	            producto.id = 1;
	        }else{
	            producto.id = products[products.length-1].id + 1
	        }
	        products.push(producto);
	        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
	        return products;
	                            }
	    mostrarProductos = async () =>{
	        if(fs.existsSync(path)){
	            const data = await fs.promises.readFile(path,'utf-8');
	            const products = JSON.parse(data);
	            return products
	        }else{
	            return []
	        }
	    }
        mostrarUnProducto = async (id) =>{
	        if(fs.existsSync(path)){
	            const data = await fs.promises.readFile(path,'utf-8');
	            const products = JSON.parse(data);
                const product = product.find((producto) => producto.id ===id);
	            return products; 
	        }else{
	            return []
	        }
	    }
        UpdateProduct = async (id,updatedProduct) =>{
	        try{
	            const data = await fs.promises.readFile(path,'utf-8');
	            const products = JSON.parse(data);
                const index =product.findIndex ((product) => product.id ===1);
            if (index !== -1) {
                product [index] = {
                    ...products[index],
                    ...updatedProduct,
                    id};

               await fs.promises.writeFile(path, JSON.stringify (products,null, '\t'));
               return products [index];
                }else {
                    throw new Error ('Nose se encontró ese id ${id}');
            }
        } catch (error) {
            console.error(error);
        }
    }
        deleteProduct = async (id) =>{
            const productos = await this.mostrarProductos ();
            const index = productos.findIndex ((producto) => producto.id === id);
	        if (index >= 0) {
                products.splice (index, 1);
                await fs.promises.writeFile(path, JSON.stringify (productos,null, '\t'));
                return true;
            }
            return false;
	    }

	}
