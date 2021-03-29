import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutmeComponent } from './modules/aboutme/aboutme.component';
import { AdduserComponent } from './modules/adduser/adduser.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { PageNofoundComponent } from './shared/components/page-nofound/page-nofound.component';
import { PhraseListComponent } from './shared/components/phrase-list/phrase-list.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  { path: "Phrases", component: PhraseListComponent, canActivate: [AuthGuard] }
  ,
  {
    path: 'SignUp',
    component: AdduserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: '/Phrases', pathMatch: 'full' },
  { path: '**', component : PageNofoundComponent }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
