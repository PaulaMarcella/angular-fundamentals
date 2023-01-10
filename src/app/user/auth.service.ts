import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { IUser } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  currentUser: any;
  loginUser(userName: string, password: string) {
    const loginInfo = {
      username: userName,
      password,
    };

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap((data) => {
          this.currentUser = data['user'];
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    this.currentUser = {
      ...this.currentUser,
      firstName,
      lastName,
    };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(
      `/api/users/${this.currentUser?.id}`,
      this.currentUser,
      options
    );
  }

  checkAuthenticationStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap((data) => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();

    // alternative to tap:
    // .subscribe((data) => {
    //   if (data instanceof Object) {
    //     this.currentUser = <IUser>data;
    //   }
    // });
  }

  logout() {
    this.currentUser = undefined;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post('/api/logout', {}, options);
  }
}
