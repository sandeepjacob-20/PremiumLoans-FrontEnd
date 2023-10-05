import { Loanofficer } from "./loanofficer";
import { Loantype } from "./loantype";
import { Status } from "./status";
import { Verificationstatus } from "./verificationstatus";

export class Loan {
    loanId: number = 0;
    customerId: number = 0;
    name: string = '';
    phone: string = '';
    amount: number = 0;
    loanTypeId: number = 0;
    loantype: Loantype;
    statusId: number = 1;
    status: Status;
    officerId: number = 0;
    loanofficer: Loanofficer;
    verificationId: number = 1;
    verificationstatus: Verificationstatus;
    isActive: boolean = true;
}
