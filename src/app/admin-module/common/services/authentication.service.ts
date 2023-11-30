import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = environment.api + 'Account/login'; // URL to your API

  constructor(private http: HttpClient) {}

  login(credentials: { Username: string; Password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  // Store the JWT token
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      // Here you can also add logic to check if the token is expired
      return true;
    }
    return false;
  }

  // Retrieve the JWT token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove the JWT token
  logout(): void {
    localStorage.removeItem('token');
  }
}