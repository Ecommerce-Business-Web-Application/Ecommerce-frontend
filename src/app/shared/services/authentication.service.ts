import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { User } from '../interfaces/login.interface';

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

  public storeToken(token: string): void {
        localStorage.setItem('token', token);
    }
 
  public login(credentials: User ): Observable<any> {
    return this.http.post(this.resourceBaseUrl, credentials);
  }

  public logout(): void {
        localStorage.removeItem('token');
    }

   public isAuthenticated(): boolean {
        const token = this.getToken();
        if (token) {
        
        return true;
        }
        return false;
    }

    public getToken(): string | null {
        return localStorage.getItem('token');
    }
}