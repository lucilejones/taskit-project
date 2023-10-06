import { Component } from '@angular/core';
import { Task } from './task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[]= [
    new Task(
      'Clean art area',
      'Oct 20, 2023',
      'Medium',
      'To do',
      ['edit', 'delete']
    ),
    new Task(
      'Make apple pie',
      'Oct 31, 2023',
      'High',
      'To do',
      ['edit', 'delete']
    )
  ];
}
