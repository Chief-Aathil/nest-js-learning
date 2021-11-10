import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProdutService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = new Date().toString()
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }
}
