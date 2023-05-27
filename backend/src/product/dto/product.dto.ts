import { IsNotEmpty } from 'class-validator';
import { Shop } from 'src/shop/entities/shop.entity';

class BaseOrderDTO {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly price: number;
}
export class ProductDTO extends BaseOrderDTO {
  @IsNotEmpty()
  readonly shop: Shop;
}

export class PublicProductDTO extends BaseOrderDTO {
  @IsNotEmpty()
  readonly shop: number;
}
