import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from './aboutme.component';

const routes: Routes = [{ path: '', component: AboutmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutmeRoutingModule { }
