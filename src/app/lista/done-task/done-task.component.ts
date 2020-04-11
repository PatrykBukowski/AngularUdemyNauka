import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../inne-klasy/task-class';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  @Input() tasksDone: Array<Task> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
