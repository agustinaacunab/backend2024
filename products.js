import crypto from 'crypto';

export class product {
    constructor(title, description, price, thumbnail, stock, code) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = [];  // Corregir aquí
        this.stock = stock;
        this.code = code;
        this.id = crypto.randomBytes(10).toString('hex');
    }
}
