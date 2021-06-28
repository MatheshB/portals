import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empupdprofile',
  templateUrl: './empupdprofile.component.html',
  styleUrls: ['./empupdprofile.component.css']
})
export class EmpupdprofileComponent implements OnInit {
  data_upd:any;
  district_upd: any;
  country_upd: any;
  fname_upd: any;
  lname_upd: any;
  street_upd:any;
  city_upd: any;
  pcode_upd: any;
  state_upd: any;
  phno_upd: any;
  cid_upd: any;


  constructor(private http:HttpClient,private router:Router) { }

  data:any;
  district: any;
  country: any;
  cid: any;
  fname: any;
  lname: any;
  street:any;
  city: any;
  pcode: any;
  state: any;
  phno: any;

uname = sessionStorage.getItem("username");

  ngOnInit(): void {
    if(this.uname==null){
      alert("Please login to view your profile");
      this.router.navigate(['/emplogin']);
    }
    else{
    this.http.post('http://localhost:3000/empprofile',{username:this.uname}).subscribe(result2=>
    {
      this.data=result2;
      console.log(this.data);
      this.cid=this.data.PERNR._text;
      this.fname=this.data.VORNA._text;
      this.lname=this.data.NACHN._text;
      this.street=this.data.STRAS._text;
      this.city=this.data.ORT01._text;

      this.pcode=this.data.PSTLZ._text;
      this.district=this.data.GBDAT._text;
      this.country=this.data.LAND._text;
      this.phno=this.data.TELNR._text;

    });
    }
  }

  test2(g:any){

    console.log(g.value);
    this.http.post('http://localhost:3000/empupdprofile',g.value).subscribe((result3)=>{

      this.data_upd=result3;

      console.log(this.data_upd);
      console.log("hi");
   if (this.data_upd["_text"]=="S"){
      this.router.navigate(['/empprofile']);
   }
   else{


    this.router.navigate(['/empdashboard']);
   }

    })

  }

}
