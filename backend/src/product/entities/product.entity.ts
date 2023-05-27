import { Shop } from 'src/shop/entities/shop.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: "int"})
  price: number

  @ManyToOne(() => Shop, (shop) => shop.products)
  shop: Shop
}
