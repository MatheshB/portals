import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-credit-debit',
  templateUrl: './credit-debit.component.html',
  styleUrls: ['./credit-debit.component.css']
})
export class CreditDebitComponent implements OnInit {

  display: any;
  debit: any;
  p: number = 1;
  constructor(private http:HttpClient,private router: Router) { }



  ngOnInit(): void {

  var uname = sessionStorage.getItem('username');
  //var uname = '0000000006';
  this.http.post('http://localhost:3000/credit',{ username: uname}).subscribe((salesdata:any)=>
  {
   //console.log(salesdata);
  this.display = salesdata['item'];
  console.log(this.display);


  });
  this.http.post('http://localhost:3000/debit',{ username: uname}).subscribe((salesdata:any)=>
  {
   //console.log(salesdata);
  this.debit = salesdata['item'];
  console.log(this.display);


  });

  }
}
