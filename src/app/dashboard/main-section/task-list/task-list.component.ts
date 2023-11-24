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

  navigateToEditTaskRoute(id: number) {
    this.rotuer.navigate(['./', id, 'edit'], {
      relativeTo: this.route,
    });
  }

  navigateToDeleteAlertRoute(id: number) {
    this.rotuer.navigate(['./', id, 'delete'], {
      relativeTo: this.route,
    });
  }


}

