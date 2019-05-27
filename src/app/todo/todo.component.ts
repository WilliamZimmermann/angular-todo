import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  private tasks: String[] = [];

  constructor() {
    this.tasks.push('Estudar');
    this.tasks.push('Pagar contas');
    this.tasks.push('Trabalhar');
  }

  ngOnInit() {
  }

}
