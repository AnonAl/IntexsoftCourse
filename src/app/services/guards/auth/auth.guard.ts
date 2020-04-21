import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {SignInComponent} from '../../../components/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private dialog: MatDialog) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!localStorage.getItem('login')) {
      return true;
    }
    this.dialog.open(SignInComponent, {
      maxWidth: '320px'
    });
    return false;
  }
}
