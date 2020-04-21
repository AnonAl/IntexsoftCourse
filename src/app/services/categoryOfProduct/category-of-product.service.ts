import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryOfProductService {

  private apiUrl: string;
  private subscriptionKey: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.subscriptionKey = environment.subscriptionKey;
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}products/categories/`,
      {
        params: {
          'api-version': '2018-10-18',
        },
        headers: {
          'Subscription-Key': this.subscriptionKey
        }
      }
    );
  }
}
