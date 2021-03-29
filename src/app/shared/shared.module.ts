import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MynavbarComponent } from './components/mynavbar/mynavbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { PageNofoundComponent } from './components/page-nofound/page-nofound.component';


@NgModule({
  declarations: [
    MynavbarComponent,
    FooterComponent,
    PageNofoundComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MynavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
