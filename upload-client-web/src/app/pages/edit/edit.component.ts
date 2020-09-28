import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@app/core/services/product.service';
import { IProduct } from '@app/shared/models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductTypeEnum } from '@app/shared/enums/product-type.enum';
import {customCurrencyMaskConfig} from '@app/core/utils/currency.configuration';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formProduct: FormGroup;
  optionsCurrency = customCurrencyMaskConfig;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.startFormGroup();
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.backPage();
      return;
    }
    const idConverted = this.convertIdToNumber(id);
    this.productService.get(idConverted).subscribe((response: IProduct) => {
      this.startFormGroup(response);
    }, error => {
      console.error(error);
    });
  }

  convertIdToNumber(id: string): number {
    const idConverted = Number(id);
    if (!idConverted) {
      this.backPage();
      throw new Error('Invalid ID');
    }
    return idConverted;
  }

  startFormGroup(product?: IProduct): void {
    this.formProduct = new FormGroup({
      id: new FormControl(product?.id),
      title: new FormControl(
        product?.title ,
        Validators.required
      ),
      description: new FormControl(
        product?.description
      ),
      type: new FormControl(
        product?.type,
        Validators.required
      ),
      rating: new FormControl(
        product?.rating,
        [
          Validators.min(0),
          Validators.max(5)
        ]
      ),
      price: new FormControl(
        product?.price,
        Validators.required
      ),
      fileName: new FormControl(
        product?.fileName
      ),
      height: new FormControl(
        product?.height
      ),
      width: new FormControl(
        product?.width
      ),
      createdAt: new FormControl(
        product?.createdAt
      )
    });
  }

  backPage(): void {
    this.router.navigate(['/']);
  }

  getAllProductTypes(): string[] {
    const enumValues: string[] = [];

    for (const value in ProductTypeEnum) {
        if (typeof ProductTypeEnum[value] === 'string') {
          enumValues.push(value);
        }
    }
    return enumValues;
  }

  onSubmit(): void {
    const product: IProduct = { ...this.formProduct.value };
    product.type = Number(product.type);
    product.height = Number(product.height);
    product.width = Number(product.width);
    this.productService.update(product).subscribe(
      (result) => {
        Swal.fire({
          title: 'Success!',
          text: `Product updated successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/']);
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: `${error.message}`,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    );
  }
}
