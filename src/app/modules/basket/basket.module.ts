import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../services/guards/auth/auth.guard';
import {MatListModule} from '@angular/material/list';

const router: Routes = [
  {
    path: '',
    component: BasketComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    MatListModule
  ]
})
export class BasketModule { }
