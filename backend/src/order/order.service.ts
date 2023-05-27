import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderDTO } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(order: OrderDTO): Promise<Order> {
    return await this.orderRepository.save(order);
  }

  async findOrders({ email, phone }): Promise<Order[]> {
    return await this.orderRepository
      .createQueryBuilder('order')
      .where('order.email = :email OR order.phone = :phone', {
        email,
        phone,
      })
      .leftJoinAndSelect('order.products', 'order_product')
      .getMany();
  }
}
