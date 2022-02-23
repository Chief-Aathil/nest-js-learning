import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class ProductsResolver {

    @Query()
    helloWorld() {
        return 'Hello World!';
    }
}