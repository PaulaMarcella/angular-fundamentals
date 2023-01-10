import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error ::ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}
  profileForm!: FormGroup;
  ngOnInit() {
    let firstName = new FormControl(
      this.authService.currentUser?.firstName,
      Validators.required
    );
    let lastName = new FormControl(
      this.authService.currentUser?.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValue: any) {
    if (this.profileForm.valid) {
      this.authService
        .updateCurrentUser(formValue.firstName, formValue.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved');
          // this.router.navigate(['events']);
        });
    } else {
      return;
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
}
