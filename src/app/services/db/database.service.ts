import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../../models/models';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) {
  }

  getUsers(): Observable<User[]> {
    return this.firestore
      .collection('users')
      .snapshotChanges()
      .pipe(
        map(res => {
          return res.map(item => item.payload.doc.data()) as User[];
        })
      );
  }

  setUser(user: User) {
    this.firestore.collection('users').doc('users').set({
    });
  }
}
