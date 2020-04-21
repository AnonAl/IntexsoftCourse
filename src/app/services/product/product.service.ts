import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string;
  private subscriptionKey: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.subscriptionKey = environment.subscriptionKey;
  }

  getAllProduct(searchTerm: string): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}products/search`,
      {
        params: {
          'api-version': '2018-10-18',
          query: searchTerm
        },
        headers: {
          'Subscription-Key': this.subscriptionKey,
        }
      }
    );
  }

  getProductBySku(sku: string): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}products/${sku}`,
      {
        params: {
          'api-version': '2018-10-18'
        },
        headers: {
          'Subscription-Key': this.subscriptionKey,
        }
      }
    );
  }
}
