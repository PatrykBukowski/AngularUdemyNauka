import { Component, OnInit } from '@angular/core';
import {Task} from '../inne-klasy/task-class';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasksList: Array<Task> = [];
  tasksDone: Array<Task> = [];
  constructor() { }

  ngOnInit(): void {
  }

  add(task: Task) {
    this.tasksList.push(task);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }
}
