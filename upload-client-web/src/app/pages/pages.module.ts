import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { NgxCurrencyModule } from 'ngx-currency';


@NgModule({
  declarations: [HomeComponent, EditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    SharedModule,
    NgxCurrencyModule
  ]
})
export class PagesModule { }
