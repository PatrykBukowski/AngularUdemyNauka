import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../inne-klasy/task-class';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: string;
  @Output() emitTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.emitTask.emit(new Task(this.newTask));
    this.newTask = '';
  }
}
