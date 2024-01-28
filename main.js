import { product } from "./products.js";
import { productManager } from "./ProductManager.js";


const product1 = new product("Cama Michi","Medidas 30x25x20",15,"no image found",5,"CM12A")
const product2 = new product("Bebedero Cascada","No incluye alimentador",25,"no image",10,"BM25B")
const product3 = new product("Pack Pecesitos","Juguetes michis",6,"no image",20,"PP33M")
const product4 = new product("Set comedero","Set Comedero y bebedero",30,"Michi",3,"SC78M")
const product5 = new product("Prueba 1","esta es una prueba mas",10,"prueba",1,"PR12o")



const producto1version2 = new product("Cama Michi","Medidas 30x25x20",25,"no image",3,"CM12A")
const productManager = new productManager ('./products.json')



//await productManager.addProduct(product1);
//const updatedProducts = await productManager.getProducts();
//console.log(updatedProducts);
