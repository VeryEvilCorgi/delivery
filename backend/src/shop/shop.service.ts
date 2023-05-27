import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
import { ShopDTO } from './dto/shop.dto';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) {}

  async getShops(): Promise<Shop[]> {
    return await this.shopRepository
      .createQueryBuilder('shop')
      .leftJoinAndSelect('shop.products', 'product')
      .getMany();
  }

  async createShop(shop: ShopDTO): Promise<Shop> {
    return await this.shopRepository.save(shop);
  }

  async findShop(id: number): Promise<Shop> {
    return await this.shopRepository.findOneBy({ id });
  }
}
