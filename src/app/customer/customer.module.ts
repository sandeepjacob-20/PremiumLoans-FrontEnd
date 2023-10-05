import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent, HomeComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
