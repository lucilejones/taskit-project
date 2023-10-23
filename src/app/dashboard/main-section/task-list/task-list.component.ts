import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/task.model';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // tasks: Task[]= [
  //   new Task(
  //     'Clean art area',
  //     'Oct 20, 2023',
  //     'Medium',
  //     'To do',
  //     ['edit', 'delete']
  //   ),
  //   new Task(
  //     'Make apple pie',
  //     'Oct 31, 2023',
  //     'High',
  //     'To do',
  //     ['edit', 'delete']
  //   )
  // ];
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks;
  }
}
