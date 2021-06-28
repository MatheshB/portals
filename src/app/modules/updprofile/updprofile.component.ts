import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updprofile',
  templateUrl: './updprofile.component.html',
  styleUrls: ['./updprofile.component.css']
})
export class UpdprofileComponent implements OnInit {
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
      this.router.navigate(['/login']);
    }
    else{
    this.http.post('http://localhost:3000/profile',{username:this.uname}).subscribe(result2=>
    {
      this.data=result2;
      console.log(this.data);
      this.cid=this.data.KUNNR._text;
      this.fname=this.data.NAME_1._text;
      this.lname=this.data.NAME_2._text;
      this.street=this.data.STREET._text;
      this.city=this.data.CITY._text;
      this.district=this.data.DISTRICT._text;
      this.pcode=this.data.PS_CODE._text;
      this.state=this.data.STATE._text;
      this.country=this.data.COUNTRY._text;
      this.phno = this.data.TELE_NUM._text;
    });
    }
  }

  test2(g:any){

    console.log(g.value);
    this.http.post('http://localhost:3000/updprofile',g.value).subscribe((result3)=>{

      this.data_upd=result3;
      console.log(this.data_upd);
      if (this.data_upd['E_COMPLETE']['_text'] == "1" ){
        alert("Values  updated!");
       this.router.navigate(['/profile'])
      }
      else{
        alert("Values not updated!");

      }
    })

  }

}
