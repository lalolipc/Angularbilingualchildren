import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormloginModule } from './formlogin/formlogin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormloginModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    FormloginModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
