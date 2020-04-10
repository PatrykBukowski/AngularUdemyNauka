import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-s38e186-child',
  templateUrl: './s38e186-child.component.html',
  styleUrls: ['./s38e186-child.component.css']
})
export class S38e186ChildComponent implements OnInit {

  @Input() tasks;

  @Output() eventTask = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  select(task: any) {
    this.eventTask.emit(task);
  }
}
