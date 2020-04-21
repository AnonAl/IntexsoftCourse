import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignInComponent} from '../sign-in/sign-in.component';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private dialog: MatDialog,
    private auth: AuthService
  ) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignInComponent, {
      maxWidth: '320px'
    });
    dialogRef.backdropClick().subscribe(() => dialogRef.close());
  }

  logout(): void {
    localStorage.removeItem('login');
  }

  isAuth(): boolean {
    return this.auth.isAuthenticated();
  }

}
