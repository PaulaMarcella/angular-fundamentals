import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'selector-name',
  templateUrl: 'login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  loginInvalid: boolean = false;
  userName: string = '';
  password: string = '';
  mouseoverLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  login(formValue: any) {
    console.log(formValue);
    this.authService
      .loginUser(formValue.userName, formValue.password)
      .subscribe((res) => {
        if (!res) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  ngOnInit() {}
}
