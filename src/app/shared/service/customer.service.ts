import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { error } from '@angular/compiler/src/util';
import { Loan } from '../model/loan';
import { Loantype } from '../model/loantype';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // declaring form
  formOrderData: Loan = new Loan();

  // declaring variables to store data
  loans: Loan[] = [];
  loanTypes: Loantype[] = [];
  constructor(private httpClient: HttpClient) { }

  //display all loans
  getAllLoans(): void {
    this.httpClient.get(environment.apiUrl + 'api/listloans').
      toPromise().
      then(response => {
        console.log(response);
        this.loans = response as Loan[];
      },
        error => {
          console.log(error);
        });
  }

  //loan types
  getAllLoanTypes(): void {
    this.httpClient.get(environment.apiUrl + 'api/getloantypes').
      toPromise().
      then(response => {
        console.log(response);
        this.loanTypes = response as Loantype[];
      },
        error => {
          console.log(error);
        });
  }

  //inserting loans
  insertOrder(loan: Loan): Observable<any> {
    console.log(loan);
    return this.httpClient.post(environment.apiUrl + 'api/addloan', loan);
  }

  //deleting loans
  deleteLoan(loanId: number): void {
    console.log(loanId);
    this.httpClient.get(environment.apiUrl + 'api/deactivateloan/' + loanId);
  }
}
