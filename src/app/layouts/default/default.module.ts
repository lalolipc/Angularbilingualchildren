import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    



  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    NgbModule,
    CarouselModule



  ]
})
export class DefaultModule { }
