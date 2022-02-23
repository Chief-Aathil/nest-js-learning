import { Module } from "@nestjs/common";
import { ProductsResolver } from "./product.resolver";
import { ProductsController } from "./products.controller";
import { ProdutService } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers: [
        ProdutService,
        ProductsResolver,
    ]
})
export class ProductsModule{ }