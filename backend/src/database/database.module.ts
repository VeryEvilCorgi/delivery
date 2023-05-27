import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Shop } from 'src/shop/entities/shop.entity';
import { Product } from 'src/product/entities/product.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderProduct } from 'src/product/entities/order.product.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('APP_DATABASE_HOST'),
        port: configService.get('APP_DATABASE_PORT'),
        username: configService.get('APP_DATABASE_USER'),
        password: configService.get('APP_DATABASE_PASSWORD'),
        database: configService.get('APP_DATABASE_NAME'),
        entities: [Shop, Product, Order, OrderProduct],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
