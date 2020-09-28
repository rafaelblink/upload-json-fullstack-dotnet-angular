import { ProductTypeEnum } from '@app/shared/enums/product-type.enum';
export interface IProduct {
  id: number;
  createdAt?: Date;
  title: string;
  type: ProductTypeEnum;
  description?: string;
  fileName?: string;
  height?: number;
  width?: number;
  price: number;
  rating?: number;
}
