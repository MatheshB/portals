import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {
  out: any;


  constructor(private http: HttpClient, private router: Router) { }
  CUSTOMER_NO: any;
  NAME_1: any;
  NAME_2: any;
  STREET: any;
  CITY: any;
  DISTRICT: any;
  STATE: any;
  COUNTRY: any;
  POST_CODE: any;
  MOBILE_NO: any;

  object: any;

  stringifiedData: any;
  ngOnInit(): void {
    document.body.classList.add('bg-img');
    // alert("hi 1");
        // checkbutton(f) {
    // alert("entered profile component function");
    var uname = sessionStorage.getItem('username');
   // var uname = "0000007007";
    this.http.post('http://localhost:3000/profile', { username: uname }).subscribe(result => {

        console.log(result);
      this.out=result;
      this.CUSTOMER_NO = this.out.KUNNR._text;
      this.NAME_1 = this.out.NAME_1._text;
      this.NAME_2 = this.out.NAME_2._text;
      this.STREET = this.out.STREET._text;
      this.CITY = this.out.CITY._text;
      this.DISTRICT = this.out.DISTRICT._text;
      this.STATE = this.out.STATE._text;
      this.COUNTRY = this.out.COUNTRY._text;
      this.POST_CODE = this.out.PS_CODE._text;
      this.MOBILE_NO = this.out.TELE_NUM._text;
      this.router.navigate(['/profile']);


    });
  }
}

