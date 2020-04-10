import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s37',
  templateUrl: './s37.component.html',
  styleUrls: ['./s37.component.css']
})
export class S37Component{
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
