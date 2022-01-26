import { Component, OnInit } from '@angular/core';
import { ITodoElem, TodoServicesService } from '../services/todo-services.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public elements: ITodoElem[] = this.todoElemsSerivce.elements;
  constructor(
    private todoElemsSerivce: TodoServicesService,
  ) { }

  ngOnInit(): void {


  }

}
