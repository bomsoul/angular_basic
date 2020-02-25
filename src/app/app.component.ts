import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isLoading = false;

  todoList: number[] = [];

  imageURL = 'https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/p720x720/16107094_1198108590275491_1146108396919885719_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=tQUuYkYORfkAX8OVZcO&_nc_ht=scontent-sin6-1.xx&_nc_tp=6&oh=b8ed28b8a51e70c9beace4bca9d57a15&oe=5EFFE116';
  isActive = true;

  email: string;

  amount = 123456.7890;

  today = new Date();

  user = {
    name: 'John Snow',
    age: 20,
    isAdmin : false,
  };

  constructor(
    private todoService: TodoService
  ) {
    this.todoList = this.todoService.getTodoList();
  }

  onClick(event) {
    alert(event);
  }

  search(email: string) {
    console.log('search', email);
  }
}
