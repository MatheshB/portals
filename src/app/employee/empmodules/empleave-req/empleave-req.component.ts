import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleave-req',
  templateUrl: './empleave-req.component.html',
  styleUrls: ['./empleave-req.component.css']
})
export class EmpleaveReqComponent implements OnInit {

  res: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  log(f:any){

 console.log(f.value)

 this.http.post('http://localhost:3000/empleavereq',f.value).subscribe((result)=>{

   this.res=result;
   console.log(this.res['_text']);
   if (this.res["_text"]=="Success"){
      alert("leave applied!")

   }
   else{

    alert("leave can't applied!")
   }
 })
  }
}
