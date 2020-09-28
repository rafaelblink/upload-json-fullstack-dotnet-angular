import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RatingComponent } from './components/rating/rating.component';
import { ProductTypePipe } from './pipes/product-type.pipe';
import { RouterModule } from '@angular/router';
import { ErrorInputComponent } from './components/error-input/error-input.component';



@NgModule({
  declarations: [HeaderComponent, FileUploadComponent, SpinnerComponent, RatingComponent, ProductTypePipe, ErrorInputComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [HeaderComponent, FileUploadComponent, SpinnerComponent, RatingComponent, ProductTypePipe, ErrorInputComponent]
})
export class SharedModule { }
