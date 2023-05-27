import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ConfigModule.forRoot(), ShopModule, DatabaseModule, ProductModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
