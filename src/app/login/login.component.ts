import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form class="login-form">
      <div>
          <input type="text" placeholder="username">
      </div>
      <div>
          <input type="text" placeholder="password">
      </div>
      <button>Login</button>
    </form>
  `,
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
