import { Order } from 'src/order/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'int' })
  price: number;
  @Column({ type: 'int' })
  count: number;
  @ManyToOne(() => Order, (order) => order.products)
  order: Order
}
