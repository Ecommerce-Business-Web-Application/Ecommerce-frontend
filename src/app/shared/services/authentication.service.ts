import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  protected  resourceName: string;
  protected  resourceBaseUrl: string;


  constructor( http: HttpClient) {
    super(http);
    this.resourceName =  'Account/login'
    this.setResourceName(this.resourceName)
  }
 
  public login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.resourceBaseUrl, credentials);
  }

   // Remove the JWT token
    public logout(): void {
        localStorage.removeItem('token');
    }

}