import { Component, OnInit } from '@angular/core';
import {BasketService} from '../../services/basket/basket.service';
import {Product} from '../../models/models';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket: Product[] = [];

  constructor(
    private basketService: BasketService
  ) {
    this.basket = basketService.getBasket();
  }

  ngOnInit(): void {
  }

}
