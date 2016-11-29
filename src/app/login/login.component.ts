import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CustomValidators} from "./custom-validators";

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm" 
          (ngSubmit)="login()"
          class="login-form">
                              
          <input type="text"
                 name="username"                 
                 formControlName="username"
                 placeholder="username">
                                                                                                                                              
          <input type="password"
                 name="password"
                 formControlName="password"
                 placeholder="password">
                                  
      <button type="submit">Login</button>
    </form>
  `,
})

export class LoginComponent {

  public loginForm: FormGroup;
  public basicInfo: FormGroup;
  public username: FormControl;
  public password: FormControl;

  constructor() {
    this.username = new FormControl('', Validators.compose([
      CustomValidators.noSpace,
      CustomValidators.isNir
    ]));

    this.password = new FormControl('');

    this.basicInfo = new FormGroup({
      username: this.username,
      password: this.password
    })

    this.loginForm = new FormGroup({
      info: this.basicInfo
    });
  }

  public login() {
    console.log(this.loginForm);
  }
}
