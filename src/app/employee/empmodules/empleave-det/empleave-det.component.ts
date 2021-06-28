import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleave-det',
  templateUrl: './empleave-det.component.html',
  styleUrls: ['./empleave-det.component.css']
})
export class EmpleaveDetComponent implements OnInit {

  display: any;
  p: number = 1;
  constructor(private http:HttpClient,private router: Router) { }



  ngOnInit(): void {

  var uname = sessionStorage.getItem('username');
  //var uname = '0000000006';
  this.http.post('http://localhost:3000/empleavedet',{ username: uname}).subscribe((salesdata:any)=>
  {
   //console.log(salesdata);
  this.display = salesdata['item'];
  console.log(this.display);


  });

  }

}
