import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-vendheader',
  templateUrl: './vendheader.component.html',
  styleUrls: ['./vendheader.component.css']
})
export class VendheaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();

  }
}
