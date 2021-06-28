import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  display: any;
  p:number=1;
  constructor(private http:HttpClient,private router: Router) { }



  ngOnInit(): void {

  var uname = sessionStorage.getItem('username');
  //var uname = '0000000006';
  this.http.post('http://localhost:3000/inquiry',{ username: uname}).subscribe((inquiry:any)=>
  {
   //console.log(salesdata);
  this.display = inquiry['item'];
  console.log(this.display);


  });

  }

}
