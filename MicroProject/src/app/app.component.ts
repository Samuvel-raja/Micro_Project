import { Component } from '@angular/core';
import { Invoice } from '../../model/Invoice';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Invocie management';
  invoice:Invoice;
  result:string;
  invoiceArr:Invoice[];
  flag:boolean;
  constructor(private service:InvoiceService)
  {
    this.invoice=new Invoice();
    this.result="";
    this.invoiceArr=[];
    this.flag=false;

  }
  insertDetails(data:any)
  {
    this.invoice.id = data.invoiceId;
    this.invoice.invoiceDate = data.invoiceDate;
    this.invoice.customerName = data.customerName;
    this.invoice.customerMail = data.customerMail;
    this.invoice.customerLoc = data.customerLoc;
    this.invoice.customerMob = data.customerMob;
    this.invoice.productName = data.productName;
    this.invoice.productQuantity = data.productQuantity;
    this.invoice.productPrice = data.productPrice;
    this.result=this.service.insertDetails(this.invoice);
    alert(data.id+""+data.invoiceDate+""+data.customerName+""+data.customerMail+""+data.customerLoc+""+data.customerMob+""+data.productName+""+data.productPrice+""+data.staffExperience+""+data.staffCertificate+""+data.staffSalary);
  }
  updateDetails(data:any)
  {
    this.invoice.id = data.invoiceId;
    this.invoice.invoiceDate = data.invoiceDate;
    this.invoice.customerName = data.customerName;
    this.invoice.customerMail = data.customerMail;
    this.invoice.customerLoc = data.customerLoc;
    this.invoice.customerMob = data.customerMob;
    this.invoice.productName = data.productName;
    this.invoice.productQuantity = data.productQuantity;
    this.invoice.productPrice = data.productPrice;
    this.result=this.service.updateDetails(this.invoice);
    alert(data.id+""+data.invoiceDate+""+data.customerName+""+data.customerMail+""+data.customerLoc+""+data.customerMob+""+data.productName+""+data.productPrice+""+data.staffExperience+""+data.staffCertificate+""+data.staffSalary);
  }
  deleteDetails(data:any) {
    this.result=this.service.deleteDetails(data.invoiceId);
  }
  findallDetails(){
    this.invoiceArr=this.service.findallDetails();
    this.flag=true;
  }
  findDetails(data:any){
    this.invoice=this.service.findDetails(data.invoiceId);
    this.result=this.invoice.id+" "+this.invoice.invoiceDate+" "+this.invoice.customerName+" "+this.invoice.productName+" "+this.invoice.productPrice;
  }
}
