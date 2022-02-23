import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGraphQLModule } from './core/graphql/graphql.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    AppGraphQLModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
