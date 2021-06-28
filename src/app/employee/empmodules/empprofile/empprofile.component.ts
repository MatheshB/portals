import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {
  out: any;


  constructor(private http: HttpClient, private router: Router) { }
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
    // alert("hi 1");
        // checkbutton(f) {
    // alert("entered profile component function");
    var uname = sessionStorage.getItem('username');
   // var uname = "0000007007";
    this.http.post('http://localhost:3000/empprofile', { username: uname }).subscribe(result => {

      console.log(result);
      this.out = result;
      this.CUSTOMER_NO = this.out.PERNR._text;
      this.NAME_1 = this.out.VORNA._text;
      this.NAME_2 = this.out.NACHN._text;
      this.ADDRESS = this.out.STRAS._text;
      this.CITY = this.out.ORT01._text;
      this.DISTRICT = this.out.GBDAT._text;
      // this.STATE = this.out.STATE._text;
      this.COUNTRY = this.out.LAND._text;
      this.POSTL_CODE = this.out.PSTLZ._text;
      this.TELEPHONE = this.out.TELNR._text;
      this.router.navigate(['/empprofile']);
      console.log(this.ADDRESS)


    });
  }

}
