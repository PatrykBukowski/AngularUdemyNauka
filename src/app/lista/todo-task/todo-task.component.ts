import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../inne-klasy/task-class';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input() tasksList: Array<Task> = [];
  @Output() emitRemove = new EventEmitter<Task>();
  @Output() emitDone = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.emitRemove.emit(task);
  }

  done(task: Task) {
    this.emitDone.emit(task);
  }
}
