import { OrderProduct } from 'src/product/entities/order.product.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  adress: string;

  @Column({ type: 'varchar' })
  shopname: string;

  @Column({ type: 'int' })
  total: number;

  @OneToMany(() => OrderProduct, (product) => product.order)
  products: OrderProduct[];
}
