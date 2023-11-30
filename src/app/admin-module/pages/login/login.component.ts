import { Component } from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    Username: '',
    Password: ''
  };

  constructor(private authService: AuthenticationService) {}

  onLogin(): void {
    this.authService.login(this.user).subscribe(
      data => {
        // Handle successful login, store the token, etc.
      },
      error => {
        // Handle error
      }
    );
  }
}
