import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-s38e185-child',
  templateUrl: './s38e185-child.component.html',
  styleUrls: ['./s38e185-child.component.css']
})
export class S38e185ChildComponent implements OnInit {

  @Input() tasks = ['sprzątanie', 'gotowanie', 'nauka angulara'];
  // tslint:disable-next-line:no-input-rename
  @Input('taskiFekalne') tasks2;
  constructor() { }

  ngOnInit(): void {
  }

}
