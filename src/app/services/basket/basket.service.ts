import { Injectable } from '@angular/core';
import {Product} from '../../models/models';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket: Product[] = [];
  private basketChanged: Subject<Product[]>;

  constructor() {
    this.basketChanged = new Subject();
  }

  basketChanges(): Observable<Product[]> {
    return this.basketChanged.asObservable();
  }

  getBasket(): Product[] {
    return this.basket;
  }

  addToBasket(product: Product): void {
    this.basket.push(product);
    this.basketChanged.next(this.basket);
  }

  removeFromBasket(product: Product): void {
    const index = this.basket.findIndex(prod => prod.sku === product.sku);
    if (index) {
      this.basket.splice(index, 1);
      this.basketChanged.next(this.basket);
    }
  }
}
