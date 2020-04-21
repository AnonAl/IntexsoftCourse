import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {StoreService} from '../../services/store/store.service';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ProductService} from '../../services/product/product.service';
import { ProductsComponent } from './products/products.component';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './product/product.component';
import {CategoryOfProductService} from '../../services/categoryOfProduct/category-of-product.service';

const router: Routes = [
  {path: '', component: StoreComponent},
  {path: 'product/:sku', component: ProductComponent}
];

@NgModule({
  declarations: [StoreComponent, ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [StoreService, ProductService, CategoryOfProductService],
  bootstrap: [StoreComponent]
})
export class StoreModule {
}
