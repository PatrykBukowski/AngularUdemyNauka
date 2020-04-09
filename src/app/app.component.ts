import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string;
  taskList: Array<TaskClass> = [];
  taskDone: Array<TaskClass> = [];

  add() {
    this.taskList.push(new TaskClass(this.newTask));
    this.newTask = '';
    console.log(this.taskList);
  }
  remove(task) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task) {
    this.taskDone.push(task);
    this.remove(task);
  }
}

class TaskClass {
  private readonly value: string;
  constructor(value: string) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}
