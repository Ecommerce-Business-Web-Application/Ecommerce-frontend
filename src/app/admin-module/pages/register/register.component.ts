import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm: FormGroup;

  constructor(private registerService: RegisterService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.createRegisterForm(); 
  }

  private createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      roleName: ['Admin']
    });
  }
  ngOnInit() {
  }

  public onRegister(): void {
    this.registerService.register(this.registerForm.value).subscribe({
      next: () => {
          this.router.navigate(['/login']);
      },
      error: (e)=> 
        console.error(e)
      
  });
  }

  public redirectToLogin(): void {
        this.router.navigate(['/login']);
  }
}
