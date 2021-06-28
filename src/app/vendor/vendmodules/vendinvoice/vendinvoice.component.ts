import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-vendinvoice',
  templateUrl: './vendinvoice.component.html',
  styleUrls: ['./vendinvoice.component.css']
})
export class VendinvoiceComponent implements OnInit {
  panelOpenState = false;

  status:any;
  visibility=0;
  items:any;
  items1:any;
  i:any;


  seqno:any;
  value:any;
  Path:any;
  year: any;

  showitems(f:any){


    console.log(f.value.username+"      "+f.value.password)
    this.seqno = f.value.username;
    this.year = f.value.password;
          this.http.post('http://localhost:3000/vendinvoice',{ir:this.seqno,fyear:this.year,uname:localStorage.getItem('id')}).subscribe((data:any)=>{


          this.items = data['BASE64']['_text']


        let pdfWindow = window.open("");pdfWindow?.document.write("<html<head><title>Invoice pdf</title><style>body{margin: 0px;}iframe{border-width: 0px;}</style></head>");pdfWindow?.document.write("<body><embed width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(this.items)+"#toolbar=1&navpanes=0&scrollbar=0'></embed></body></html>");pdfWindow?.stop()


          this.Path= 'data:application/pdf;base64,'+(this.sanitizer.bypassSecurityTrustResourceUrl(this.items) as any).changingThisBreaksApplicationSecurity;
          console.log(this.Path)
          document.getElementById(f.value.username)?.setAttribute("href",this.Path)
        localStorage.setItem("pdf",this.items)


      });

  }

  constructor(private http: HttpClient,private router: Router,private sanitizer:DomSanitizer) {



  }


  ngOnInit(): void {
  }

}
