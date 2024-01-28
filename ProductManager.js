import crypto from 'crypto';


import { promises as fs } from 'fs';

export class productManager {
    constructor(path) {
        this.products = [];
        this.path = path;
    }

    async getProducts() {
        try {
            const fileContent = await fs.readFile(this.path, 'utf-8');
            const prods = JSON.parse(fileContent);
            return prods;
        } catch (error) {
            // Manejar el caso de archivo vacío
            if (error.code === 'ENOENT') {
                return [];
            }
            console.error('Error al obtener la lista de productos', error);
            return 'Error al obtener la lista de productos';
        }
    }
    

    async getProductById(id) {
        try {
            const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'));
            const product = prods.find(prod => prod.id === id);
            
            if (product) {
                console.log(product);
            } else {
                console.log('Producto no existente');
            }
        } catch (error) {
            console.error('Error al obtener el producto por ID');
        }
    }

    async addProduct(newProduct) {
        try {
            const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'));

            // Validaciones
            if (!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.thumbnail || !newProduct.code || !newProduct.stock) {
                console.log('Verifique que tenga todas las propiedades del producto');
                return 'Error al agregar el producto. Verifique que tenga todas las propiedades';
            }

            const index = prods.findIndex(prod => prod.code === newProduct.code);

            if (index === -1) {
                prods.push(newProduct);
                await fs.writeFile(this.path, JSON.stringify(prods));
                return 'Producto creado con éxito';
            } else {
                return 'Producto existente en tu lista';
            }
        } catch (error) {
            console.error('Error al agregar el producto', error);
            return 'Error al agregar el producto. Verifique que tenga todas las propiedades';
        }
    }

    async updateProduct(id, newProduct) {
        try {
            const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'));
            const index = prods.findIndex(product => product.id === id);

            if (index !== -1) {
                prods[index] = { ...prods[index], ...newProduct };
                await fs.writeFile(this.path, JSON.stringify(prods));
                return 'Producto actualizado correctamente';
            } else {
                return 'Producto no existente';
            }
        } catch (error) {
            console.error('Error al actualizar el producto', error);
            return 'Error al actualizar el producto';
        }
    }

    async deleteProduct(id) {
        try {
            const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'));
            const index = prods.findIndex(product => product.id === id);

            if (index !== -1) {
                const prodsFilter = prods.filter(prod => prod.id !== id);
                await fs.writeFile(this.path, JSON.stringify(prodsFilter));
                console.log('Producto eliminado con éxito');
            } else {
                console.log('Producto no existente');
            }
        } catch (error) {
            console.error('Error al eliminar el producto', error);
        }
    }
}
