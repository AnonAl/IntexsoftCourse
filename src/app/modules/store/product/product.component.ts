import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product/product.service';
import {switchMap} from 'rxjs/operators';
import {Product, ProductFull} from '../../../models/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductFull;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route
      .paramMap
      .pipe(
        switchMap(params => {
          const sku = params.get('sku');
          return this.productService.getProductBySku(sku);
        })
      )
      .subscribe(res => this.product = res);
  }

}
