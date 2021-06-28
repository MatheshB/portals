import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendpurord',
  templateUrl: './vendpurord.component.html',
  styleUrls: ['./vendpurord.component.css']
})
export class VendpurordComponent implements OnInit {

  head: any;
  values: any;
  p: number = 1;
  constructor(private http:HttpClient,private router: Router) { }



  ngOnInit(): void {

  var uname = sessionStorage.getItem('username');
  //var uname = '0000000006';

  this.http.post('http://localhost:3000/vendpurord',{ username: uname}).subscribe((result:any)=>
  {
   //console.log(salesdata);
  this.head = result['T_PURORD_HEAD']['item'];
  console.log(this.head);
  this.values= result['T_PURORD_VALUES']['item'];
  console.log(this.values);


  });

  }
}
