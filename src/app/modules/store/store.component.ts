import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store/store.service';
import {CategoryOfProduct, CategoryResponse, Product, ProductResponse, Store, StoreResponseBody} from '../../models/models';
import {ProductService} from '../../services/product/product.service';
import {CategoryOfProductService} from '../../services/categoryOfProduct/category-of-product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  stores: Store[] = [];
  categories: CategoryOfProduct[] = [];

  constructor(private storeService: StoreService,
              private categoryService: CategoryOfProductService
  ) {

  }

  ngOnInit(): void {
  }

  getStores() {
    this.storeService.getAllStores().subscribe((res: StoreResponseBody) => {
      this.stores = res.stores;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories: CategoryResponse) =>
      this.categories = categories.categories);
  }

}
