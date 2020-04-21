import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DatabaseService} from '../../services/db/database.service';
import {User} from '../../models/models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  private users: User[];
  formGroup: FormGroup;
  onSignIn: boolean;
  notFoundError: boolean;

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private db: DatabaseService
  ) {
    this.formGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.db.getUsers().subscribe(res => this.users = res);
  }

  signIn() {
    if (this.onSignIn || this.formGroup.invalid) {
      return;
    }
    this.onSignIn = true;
    const value: User = this.formGroup.value;
    const findUser = this.users.find(user =>
      user.email === value.email && user.password === value.password
    );
    if (findUser) {
      localStorage.setItem('login', 'true');
      this.dialogRef.close();
    } else {
      this.onSignIn = false;
      this.notFoundError = true;
    }
  }

  hasError(control, error) {
    return this.formGroup.get(control).getError(error);
  }

  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(SignUpComponent, {
      maxWidth: '320px',
      disableClose: false,
      hasBackdrop: true
    });
    dialogRef.backdropClick().subscribe(() => dialogRef.close());
  }

}
