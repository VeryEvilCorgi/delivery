import { IsNotEmpty } from 'class-validator';

export class ShopDTO {
  @IsNotEmpty()
  readonly name: string;
}
