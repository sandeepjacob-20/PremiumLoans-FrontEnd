import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  // empty route
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  //lazy loading
  { path: 'customer', component: CustomerComponent, loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
