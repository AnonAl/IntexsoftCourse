import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {DatabaseService} from './services/db/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalWork';

  constructor() {

  }

}
