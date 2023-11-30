import { Component } from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthenticationService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.user).subscribe(
      data => {
        if(data.token) {

          this.authService.storeToken(data.token);
          this.router.navigate(['/manage']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
