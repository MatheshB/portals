import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendlogin',
  templateUrl: './vendlogin.component.html',
  styleUrls: ['./vendlogin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VendloginComponent implements OnInit {

  res: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  log(f:any){
    alert("login entered")
 console.log(f.value.username+"      "+f.value.password)
 this.http.post('http://localhost:3000/vendlogin',f.value).subscribe((result)=>{

   this.res=result;
   console.log(this.res['_text']);
   if (this.res["_text"]=="PASSWORD_CORRECT"){
     sessionStorage.setItem("username",f.value.username)
    this.router.navigate(['/venddefault'])
   }
   else{
    this.router.navigate(['/'])
   }
 })
  }

}
