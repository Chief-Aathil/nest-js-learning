import { Controller, Post, Body, Get } from '@nestjs/common';
import { title } from 'process';
import { Product } from './product.model';

import { ProdutService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProdutService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}
