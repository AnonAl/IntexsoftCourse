import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';

import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HomePageModule} from './modules/home/home-page.module';
import {MatButtonModule} from '@angular/material/button';
import {DatabaseService} from './services/db/database.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

const router: Routes = [
  {
    path: 'store',
    loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule),
    component: MainLayoutComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home-page.module').then(m => m.HomePageModule),
    component: MainLayoutComponent
  },
  {
    path: 'basket',
    loadChildren: () => import('./modules/basket/basket.module').then(m => m.BasketModule),
    component: MainLayoutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainLayoutComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HomePageModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
