import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ShopModule } from 'src/shop/shop.module';
import { OrderProduct } from './entities/order.product.entity';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product, OrderProduct]), ShopModule],
  exports: [ProductService]
})
export class ProductModule {}
