import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PublicProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { ShopService } from 'src/shop/shop.service';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly shopService: ShopService,
  ) {}

  @Post('/')
  async createProduct(@Body() body: PublicProductDTO): Promise<Product> {
    try {
      const shop = await this.shopService.findShop(body.shop);
      const product = { ...body, shop };
      return await this.productService.createProduct(product);
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
