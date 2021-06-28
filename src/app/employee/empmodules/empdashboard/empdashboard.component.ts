
import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',

 styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {


}

}
