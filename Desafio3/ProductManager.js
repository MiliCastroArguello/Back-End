import fs from 'fs';
	

	export default class ProductManager{

        constructor() {
            this.producto
            this.path= './files/Productos.json';
        }
	    
		crearProductos = async (producto) => {
			const products = await this.mostrarProductos();
			const productExists = products.some((product) => product.title === producto.title);
		
			if (productExists) {
				const lastProductId = products.length > 0 ? products[products.length - 1].id : 0;
				producto.id = lastProductId + 1;
			} else {
				if (products.length === 0) {
					producto.id = 1;
				} else {
					producto.id = products[products.length - 1].id + 1;
				}
			}
		
			products.push(producto);
			await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
			return products;
		};
	    mostrarProductos = async () =>{
	        if(fs.existsSync(this.path)){
	            const data = await fs.promises.readFile(this.path,'utf-8');
	            const products = JSON.parse(data);
	            return products
	        }else{
	            return []
	        }
	    }
        mostrarUnProducto = async (id) =>{
	        if(fs.existsSync(this.path)){
	            const data = await fs.promises.readFile(this.path,'utf-8');
	            const products = JSON.parse(data);
                const product = product.find((producto) => producto.id ===id);
	            return products; 
	        }else{
	            return []
	        }
	    }
        UpdateProduct = async (id,updatedProduct) =>{
	        try{
	            const data = await fs.promises.readFile(this.path,'utf-8');
	            const products = JSON.parse(data);
                const index =product.findIndex ((product) => product.id ===1);
            if (index !== -1) {
                product [index] = {
                    ...products[index],
                    ...updatedProduct,
                    id};

               await fs.promises.writeFile(this.path, JSON.stringify (products,null, '\t'));
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
                await fs.promises.writeFile(thi.path, JSON.stringify (productos,null, '\t'));
                return true;
            }
            return false;
	    }

	}
