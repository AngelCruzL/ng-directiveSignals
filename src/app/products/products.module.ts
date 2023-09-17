import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule,
  ],
})
export class ProductsModule {}
