import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

console.warn("home aqui");
import { HomeComponent } from './home.component';
import { HomematerialModule } from './homematerials.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomematerialModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [
    HomematerialModule
  ]
})
export class HomeModule { }
