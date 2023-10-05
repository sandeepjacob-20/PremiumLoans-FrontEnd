import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/service/customer.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllLoans();
  }
}
