import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatExpansionModule,
    MatListModule
  ],exports:
  [
    MatExpansionModule,
    MatListModule
  ]
})
export class ContactModule { }
