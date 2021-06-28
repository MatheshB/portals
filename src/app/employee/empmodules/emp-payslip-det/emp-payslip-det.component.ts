import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-payslip-det',
  templateUrl: './emp-payslip-det.component.html',
  styleUrls: ['./emp-payslip-det.component.css']
})
export class EmpPayslipDetComponent implements OnInit {

  display: any;
  p: number=1;
  constructor(private http:HttpClient,private router: Router) { }



  ngOnInit(): void {

  var uname = sessionStorage.getItem('username');
  //var uname = '0000000006';
  this.http.post('http://localhost:3000/emppaydet',{ username: uname}).subscribe((salesdata:any)=>
  {
   //console.log(salesdata);
  this.display = salesdata['item'];
  console.log(this.display);


  });

  }
}
