import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  res: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }
  log(f:any){
    alert("login entered")
 console.log(f.value.username+"      "+f.value.password)
 this.http.post('http://localhost:3000/login',f.value).subscribe((result)=>{

   this.res=result;
   console.log(this.res['_text']);
   if (this.res["_text"]=="PASS"){
     sessionStorage.setItem("username",f.value.username)
    this.router.navigate(['/defaults'])
   }
   else{
    this.router.navigate(['/'])
   }
 })
  }

}
