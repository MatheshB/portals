import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-empheader',
  templateUrl: './empheader.component.html',
  styleUrls: ['./empheader.component.css']
})
export class EmpheaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();

  }

}
