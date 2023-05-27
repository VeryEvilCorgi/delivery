import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from './entities/shop.entity';
import { ShopDTO } from './dto/shop.dto';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/')
  returnShops(): Promise<Shop[]> {
    try {
      return this.shopService.getShops();
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/')
  createShop(@Body() body: ShopDTO): Promise<Shop> {
    try {
      return this.shopService.createShop(body);
    } catch (error) {}
  }
}
