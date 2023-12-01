import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // If you need forms
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './services/authentication.service';
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [
    // Declare components, directives, and pipes here
    NavbarComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Other modules here
    NgbModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    // Export the same components, directives, pipes, and imported modules
    CommonModule,
    FormsModule,
    NgbModule,
    NavbarComponent,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    LogoutComponent
  ],
  providers: [AuthenticationService]
})
export class SharedModule { }
