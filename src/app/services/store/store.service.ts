import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private apiUrl: string;
  private subscriptionKey: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
    this.subscriptionKey = environment.subscriptionKey;
  }

  getAllStores(): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}stores`,
      {
        params: {
          'Subscription-Key': this.subscriptionKey,
          'api-version': '2018-10-18'
        }
      }
    );
  }
}
