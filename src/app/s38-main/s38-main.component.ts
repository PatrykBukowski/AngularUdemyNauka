import { Component, OnInit } from '@angular/core';
import {createCssSelector} from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-s38-main',
  templateUrl: './s38-main.component.html',
  styleUrls: ['./s38-main.component.css']
})
export class S38MainComponent implements OnInit {
  tasksList = ['sprzątanie', 'gotowanie', 'nauka angulara', 'dupa'];
  dupaList = ['odbyt', 'gringle', 'hemoroidy', 'kupa', ' dupa'];
  constructor() { }

  ngOnInit(): void {
  }

  selected($event: string): void {
    console.log($event);
  }
}
