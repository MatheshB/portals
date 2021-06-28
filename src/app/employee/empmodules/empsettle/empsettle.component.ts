import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empsettle',
  templateUrl: './empsettle.component.html',
  styleUrls: ['./empsettle.component.css']
})
export class EmpsettleComponent implements OnInit {
  out: any;
  res: any;

  constructor(private http: HttpClient, private router: Router) { }
  JOIND: any;
  EXITD: any;
  TOTWORK: any;
  TOTD: any;
  TENPER: any;
  BAMNT: any;
  NET: any;
  GROSS: any;
  CUSTOMER_NO: any;
  NAME_1: any;
  NAME_2: any;
  ADDRESS: any;
  CITY: any;
  DISTRICT: any;

  COUNTRY: any;
  POSTL_CODE: any;
  TELEPHONE: any;

  object: any;

  stringifiedData: any;
  ngOnInit(): void {

  }
  log(f:any){
    alert("login entered")
 console.log(f.value.username+"      "+f.value.password)
 this.http.post('http://localhost:3000/empsettle',f.value).subscribe((result)=>{



   this.out=result;
   console.log(this.out);
   this.JOIND = this.out.E_JOINDATE._text;
   this.EXITD = this.out.E_EXITDATE._text;
   this.TOTWORK = this.out.E_TOTALWORKINGDAYS._text;
   this.TOTD = this.out.E_TOTALDAYS._text;
   this.TENPER = this.out.E_TENUREPERIOD._text;
   this.BAMNT = this.out.E_BASICAMOUNTMONTH._text;
   // this.STATE = this.out.STATE._text;
   this.NET = this.out.E_NETPAY._text;
   this.GROSS = this.out.E_GROSSPAY._text;
  //  this.TELEPHONE = this.out.TELNR._text;





 })
  }

}
