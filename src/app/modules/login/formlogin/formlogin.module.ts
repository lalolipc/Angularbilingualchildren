import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  
})
export class FormloginModule { }
