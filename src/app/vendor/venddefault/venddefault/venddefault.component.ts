import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venddefault',
  templateUrl: './venddefault.component.html',
  styleUrls: ['./venddefault.component.css']
})
export class VenddefaultComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
