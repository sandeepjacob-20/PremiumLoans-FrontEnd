import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.getAllLoanTypes();
  }

  addOrder(form?: NgForm) {
    console.log("Inserting............");
    form.value.statusId = 1;
    // console.log(parseInt(localStorage.getItem("customerId")))
    form.value.customerId = parseInt(localStorage.getItem("LOGIN_ID"));
    this.customerService.insertOrder(form.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error)
      }

    )
  }

  //submot form
  onSubmit(form: NgForm) {
    console.log(form.value);
    //insert
    this.addOrder(form);
    form.resetForm();
    this.router.navigateByUrl("customer/list")
  }
}
