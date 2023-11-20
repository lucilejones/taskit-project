import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../../shared/task.model';
import { TasksService } from '../../shared/tasks.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  // taskDetails: Task;

  constructor(
    private route: ActivatedRoute,
    private rotuer: Router,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
    this.tasksService.taskListUpdated
      .subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks;
        }
      )
  }

  navigateToEditTaskRoute(id) {
    this.rotuer.navigate(['./', id, 'edit'], {
      relativeTo: this.route,
    });
  }

  // deleteTask() {
  //   this.tasksService.removeTask();
  // }
}

// TODO how to pass the correct task to the remove task method?
// TODO have this task list subscribe to know when a task has been removed?
