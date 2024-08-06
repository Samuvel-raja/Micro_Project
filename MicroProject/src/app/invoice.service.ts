import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../../model/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
url:string;
invoice:Invoice;
invoiceArr:Invoice[];
  constructor(private http: HttpClient) { 
    this.url="http://localhost:3004/Invoices";
    this.invoice=new Invoice();
    this.invoiceArr=[];
  }

  insertDetails(invoice:Invoice){
    this.http.post<Invoice>(this.url,invoice).subscribe();
    return "Invoice added";
  }
  updateDetails(invoice:Invoice){

    
    this.http.put<Invoice>(this.url+"/"+invoice.id,invoice).subscribe();
    return "Invoice updated";
  }
  deleteDetails(invoiceId:number)
  {
    this.http.delete<Invoice>(this.url+"/"+invoiceId).subscribe();
    return "Deleted success";
  }
  findallDetails(){
    this.http.get<Invoice[]>(this.url).subscribe(data =>this.invoiceArr=data);
    return this.invoiceArr;
   }
   findDetails(invoiceId:number){
    this.http.get<Invoice>(this.url+"/"+invoiceId).subscribe(data =>this.invoice=data);
    return this.invoice;
   }
}
