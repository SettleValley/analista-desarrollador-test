import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {SignupComponent} from './components/signup/signup.component'
import {SigninComponent} from './components/signin/signin.component'
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'client/:id',
    component: ClientDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
