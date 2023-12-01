import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  public loginForm: FormGroup;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.createLoginForm(); 
  }

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  ngOnInit() {
  }

  public onLogin(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        if(data.token) {
          this.authService.storeToken(data.token);
          this.router.navigate(['/manage']);
        }
      },
      error: (e)=> 
        console.error(e)
      
  });
  }
  public redirectToRegistration(): void {
        this.router.navigate(['/register']);
  }
}
