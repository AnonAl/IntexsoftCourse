import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product, ProductResponse} from '../../../models/models';
import {ProductService} from '../../../services/product/product.service';
import {BasketService} from '../../../services/basket/basket.service';
import {takeWhile} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  basket: Product[] = [];

  destroyed: boolean;
  name: string[];
  count: number;

  constructor(
    private router: Router,
    private productService: ProductService,
    private basketService: BasketService
  ) {
    this.basket = basketService.getBasket();
    this.basketService
      .basketChanges()
      .pipe(
        takeWhile(() => !this.destroyed)
      )
      .subscribe(res => this.basket = res);
  }

  ngOnInit(): void {
  }

  findProduct(e) {
    this.productService.getAllProduct(e.target.value).subscribe((res: ProductResponse) => {
      this.products = res.results;
    });
    // this.productNotFound(e);
    // if (this.count > 0) {
    //   alert('Error');
    // } else {
    //   return false;
    // }
  }

  productNotFound(e) {
    this.productService.getAllProduct(e.target.value).forEach(product => {
        this.name.push(product.name);
      }
    );
    for (const name of this.name) {
      if (name !== e.target.value) {
        this.count++;
      }
    }
  }


  isOnBasket(product: Product): boolean {
    return !!this.basket.find(prod => prod.sku === product.sku);
  }

  addToBasket(product: Product): void {
    this.basketService.addToBasket(product);
  }

  removeFromBasket(product: Product): void {
    this.basketService.removeFromBasket(product);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

}
