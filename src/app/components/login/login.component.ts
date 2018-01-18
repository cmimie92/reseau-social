import {UsernameValidators} from './username.validators';
import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl('', Validators.required)
  });
}
