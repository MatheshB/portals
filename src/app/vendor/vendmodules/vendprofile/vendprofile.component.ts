import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendprofile',
  templateUrl: './vendprofile.component.html',
  styleUrls: ['./vendprofile.component.css']
})
export class VendprofileComponent implements OnInit {

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
    this.http.post('http://localhost:3000/vendprofile', { username: uname }).subscribe(result => {

        console.log(result);
      this.out=result;
      this.CUSTOMER_NO = this.out.VENDOR._text;
      this.NAME_1 = this.out.NAME._text;
      this.NAME_2 = this.out.NAME_2._text;
      this.ADDRESS= this.out.STREET._text;
      this.CITY = this.out.CITY._text;
      this.DISTRICT = this.out.DISTRICT._text;
      // this.STATE = this.out.STATE._text;
      this.COUNTRY = this.out.COUNTRY._text;
      this.POSTL_CODE = this.out.POSTL_CODE._text;
      this.TELEPHONE = this.out.TELEPHONE._text;
      this.router.navigate(['/vendprofile']);
      console.log(this.ADDRESS)


    });
  }

}
