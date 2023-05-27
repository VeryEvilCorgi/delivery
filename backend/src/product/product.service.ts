import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDTO } from './dto/product.dto';
import { OrderProduct } from './entities/order.product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>
  ) {}

  async createProduct(product: ProductDTO): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async createOrderProduct(product: any): Promise<OrderProduct> {
    return await this.orderProductRepository.save(product)
  }

  async getProduct(ids: Array<number | string>) {
    return await this.productRepository
      .createQueryBuilder('product')
      .where('product.id IN (:...ids)', {
        ids,
      })
      .getMany();
  }
}
