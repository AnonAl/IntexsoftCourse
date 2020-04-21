import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {DatabaseService} from '../../services/db/database.service';

const router: Routes = [
  {path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [HomePageComponent]
})
export class HomePageModule {


}
