import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdefault',
  templateUrl: './empdefault.component.html',
  styleUrls: ['./empdefault.component.css']
})
export class EmpdefaultComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
