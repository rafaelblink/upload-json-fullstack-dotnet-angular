import { Pipe, PipeTransform } from '@angular/core';
import { ProductTypeEnum } from '../enums/product-type.enum';

@Pipe({
  name: 'productTypePipe'
})
export class ProductTypePipe implements PipeTransform {

  transform(type: number): string {
    let name = '-';
    switch (Number(type)) {
      case ProductTypeEnum.dairy:
        name = 'Dairy';
        break;
      case ProductTypeEnum.fruit:
        name = 'Fruit';
        break;
      case ProductTypeEnum.vegetable:
        name = 'Vegetable Food';
        break;
      case ProductTypeEnum.bakery:
        name = 'Bakery';
        break;
      case ProductTypeEnum.vegan:
        name = 'Vegan Food';
        break;
      case ProductTypeEnum.meat:
        name = 'Meat';
        break;
      default:
        break;
    }
    return name;
  }

}
