import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FindOrderDTO, PublicOrderDTO } from './dto/order.dto';
import { ProductService } from 'src/product/product.service';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(
    private readonly productService: ProductService,
    private readonly orderService: OrderService,
  ) {}

  @Get('/')
  async getOrders(@Query() params: FindOrderDTO): Promise<Order[]> {
    try {
      return await this.orderService.findOrders(params);
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/')
  async createOrder(@Body() body: PublicOrderDTO): Promise<Order> {
    try {
      const ids = body.products?.map((product) => product?.id);

      const productsFromDB = await this.productService.getProduct(ids);

      const productsForOrder = productsFromDB.map((product) => ({
        ...product,
        count: body.products.find(({ id }) => id === product.id)?.count,
      }));

      const newOrder = {
        ...body,
        products: productsForOrder,
        total: productsForOrder.reduce(
          (acc, current) => (acc = acc + current.price * current.count),
          0,
        ),
      };

      const order = await this.orderService.createOrder(newOrder);

      for (let product of productsForOrder) {
        const newProductForOrder = { ...product, order };
        this.productService.createOrderProduct(newProductForOrder);
      }

      return order;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
