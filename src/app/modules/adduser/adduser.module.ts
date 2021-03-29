import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormsignupModule } from './formSignup.module';
import { NotificationListComponent } from 'src/app/shared/components/notification/notification.component';
import { NotificationService } from 'src/app/shared/components/notification.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from 'src/app/auth/auth-interceptor.service';



@NgModule({
  declarations: [AdduserComponent,NotificationListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsignupModule,
    ReactiveFormsModule          
  ],
  exports:[
    FormsignupModule
],
providers:
[
    
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },
   NotificationService
 
],
})
export class AdduserModule { }
