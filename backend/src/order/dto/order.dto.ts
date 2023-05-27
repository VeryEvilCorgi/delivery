import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

class BaseOrderDTO {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly adress: string;
  @IsNotEmpty()
  readonly shopname: string;
}

class PublicOrderProductDTO {
  @IsNotEmpty()
  readonly id: number;
  @IsNotEmpty()
  readonly count: number;
}

export class OrderDTO extends BaseOrderDTO {
  @IsNotEmpty()
  readonly products: Array<Product>;
}

export class PublicOrderDTO extends BaseOrderDTO {
  @IsNotEmpty()
  readonly products: Array<PublicOrderProductDTO>;
}

export class FindOrderDTO {
  readonly email: string;
  readonly phone: string;
}
