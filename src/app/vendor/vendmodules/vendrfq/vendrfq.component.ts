import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendrfq',
  templateUrl: './vendrfq.component.html',
  styleUrls: ['./vendrfq.component.css']
})
export class VendrfqComponent implements OnInit {
  head: any;
  values: any;
  p: number = 1;
  constructor(private http:HttpClient,private router: Router) { }



  ngOnInit(): void {

  var uname = sessionStorage.getItem('username');
  //var uname = '0000000006';

  this.http.post('http://localhost:3000/vendrfq',{ username: uname}).subscribe((result:any)=>
  {
   //console.log(salesdata);
  this.head = result['T_RFQ_HEAD']['item'];
  console.log(this.head);
  this.values= result['T_RFQ_VALUES']['item'];
  console.log(this.values);


  });

  }

}
