import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutmeModule } from './modules/aboutme/aboutme.module';
import { DefaultModule } from './layouts/default/default.module';
import { ContactModule } from './modules/contact/contact.module';
import {MatButtonModule} from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeModule } from './modules/home/home.module';
import { AdduserModule } from './modules/adduser/adduser.module';
import { AdduserComponent } from './modules/adduser/adduser.component';
import { NotificationService } from './shared/components/notification.service';





@NgModule({
  declarations: [
    AppComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, 
    DefaultModule,   
    AboutmeModule,
    ContactModule,
    MatButtonModule,
    HomeModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
