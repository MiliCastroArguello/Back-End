class ProductManager {
    constructor() {
      this.products = [];
      this.newId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {

      const codigoRepetido = this.products.some((product) => product.code === code);
      if (codigoRepetido) {
        console.log(`Ya existe el código ${code}`);
        return;
      }
  
      const newProduct = {
        id: this.newId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      this.newId++;
  
      console.log(`Producto con id ${newProduct.id} agregado correctamente`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.log("Not found");
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();
  
  productManager.addProduct("Kindle","Elemento para leer digitalmente",450, "./multimedia/kindle.jpg","450",4);
  productManager.addProduct("Iphone","telefono celuar",20,"./multimedia/iphone.jpg","451",200);
  
  const todosProducts = productManager.getProducts();
  console.log(todosProducts);
  
  const productById = productManager.getProductById(1);
  console.log(productById);
  
  const idNotfound = productManager.getProductById(3);
  