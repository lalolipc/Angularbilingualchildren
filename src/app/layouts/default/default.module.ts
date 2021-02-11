import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeModule } from 'src/app/modules/home/home.module';


@NgModule({
  declarations: [
    DefaultComponent
    
    



  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    NgbModule,
    
    



  ]
})
export class DefaultModule { }
