import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  LogOut(): void {
    console.log("Logout");
    this.authService.logOut();
  }
}
