import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Shop } from './entities/shop.entity';

@Module({
  providers: [ShopService],
  controllers: [ShopController],
  imports: [TypeOrmModule.forFeature([Shop])],
  exports: [ShopService]
})
export class ShopModule {}
