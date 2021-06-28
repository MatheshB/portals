import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css']
})
export class MasterdataComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;


  constructor(private http: HttpClient, private router: Router, private _formBuilder: FormBuilder) {}
  res: any;
  cust_id: any;
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  upload_response: any;
    public file: any;
    public xl_data: any = [];
    getFilename(ev: any) {
      this.file = ev.target.files[0];
    }
    upload() {
      let workBook: any = null;
      let jsonData = null;
      const reader = new FileReader();
      reader.onload = (event) => {

        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});
        this.xl_data = jsonData['Sheet1'];
        this.upload_to_sap();
      };
      reader.readAsBinaryString(this.file);
    }
    async upload_to_sap() {
      for (let i = 0; i < this.xl_data.length; i++) {
        console.log(this.xl_data[i]);
        this.http.post('http://localhost:3000/masterdata', this.xl_data[i]).subscribe(result => {
        this.cust_id=result;
        console.log(result);
         // this.custid=this.res._text;
       // console.log(result['_text']);
          // console.log(result);
          // alert(result)
          //alert(result['_text']);

          // this.upload_response = result['_text'];
          // alert(this.upload_response)
          // if(this.edit_form_output['_text'] == "UPDATE SUCCESSFULL"){
          //   this.router.navigate(['/profile/myprofile']);
          // }else{
          //   alert("UPDATE UNSUCCESSFULL ! PLEASE TRY AGAIN")
          // }
          // alert(this.edit_form_output['_text'])

        })
      }
    }
  }




