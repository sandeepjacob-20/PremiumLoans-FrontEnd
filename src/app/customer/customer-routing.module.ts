import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  //redirection to customer home
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
