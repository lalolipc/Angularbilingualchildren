import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormsignupModule } from './formSignup.module';



@NgModule({
  declarations: [AdduserComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsignupModule
  ],
  exports:[
    FormsignupModule
]
})
export class AdduserModule { }
