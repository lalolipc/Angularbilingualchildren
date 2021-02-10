import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutmeRoutingModule } from './aboutme-routing.module';
import { AboutmeComponent } from './aboutme.component';
import { AboutmaterialModule } from './aboutmaterials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AboutmeComponent],
  imports: [
    CommonModule,
    AboutmeRoutingModule,
    AboutmaterialModule,
    BrowserAnimationsModule
    
    
  ],exports: [
 
    AboutmaterialModule
    
  ]
})
export class AboutmeModule { }
