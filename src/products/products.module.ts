import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProdutService } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers:[ProdutService]
})
export class ProductsModule{ }