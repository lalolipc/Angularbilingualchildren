import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormsignupModule } from './formSignup.module';
import { NotificationListComponent } from 'src/app/shared/components/notification/notification.component';
import { NotificationService } from 'src/app/shared/components/notification.service';



@NgModule({
  declarations: [AdduserComponent,NotificationListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsignupModule
  ],
  exports:[
    FormsignupModule
],
providers: [NotificationService]
})
export class AdduserModule { }
