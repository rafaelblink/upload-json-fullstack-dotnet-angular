import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/core/services/product.service';
import { IProduct } from '@app/shared/models/product.model';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { ProductTypeEnum } from '@app/shared/enums/product-type.enum';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: IProduct[];
  productTypeEnum: ProductTypeEnum;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  sendFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.productService.sendFile(formData).subscribe(response => {
      Swal.fire({
        title: 'Success!',
        text: 'File imported successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.getAllProducts();
    });
  }

  getAllProducts(): void {
    this.productService.getAll().subscribe((response: IProduct[]) => {
      this.products = response;
    }, (error) => {
      this.errorMessageRequest(error);
    });
  }

  removeItem(id: number): void {
    this.removeConfirmation().then(removeConfirm => {
      if (removeConfirm.value) {
        this.productService.remove(id).subscribe((response: IProduct) => {
          Swal.fire({
            title: 'Success!',
            text: `${response.title} removed successfully!`,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.removeProductFromArray(id);
        }, (error) => {
          this.errorMessageRequest(error);
        });
      }
    });
  }

  removeProductFromArray(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  errorMessageRequest(error: Error): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Error!',
      text: `${error.message}`,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }

  removeConfirmation(): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Confirmation',
      text: 'Do you really want to remove this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#f14668',
      cancelButtonText: 'No',
    });
  }

}
