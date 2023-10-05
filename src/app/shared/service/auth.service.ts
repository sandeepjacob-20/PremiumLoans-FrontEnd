import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  public loginVerify(user: User): Observable<any> {

    //call webAPI for checking username and password
    return this.httpClient.get<User>(environment.apiUrl +
      'api/login/' + user.loginId + '&' + user.password);
  };

  // for logout
  public logOut() {

    //clear all local and session storage keys
    localStorage.removeItem('USER_NAME');
    localStorage.removeItem('ACCESS_ROLE');
    localStorage.removeItem('JWT_TOKEN');

    //redirect to login
    this.router.navigate(['auth/login']);
  }
}
