import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // If you need forms
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // Declare components, directives, and pipes here
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Other modules here
    NgbModule,
    RouterModule.forRoot([]),
  ],
  exports: [
    // Export the same components, directives, pipes, and imported modules
    CommonModule,
    FormsModule,
    NgbModule,
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
