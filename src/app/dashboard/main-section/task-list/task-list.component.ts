import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Task } from '../../shared/task.model';
import { TasksService } from '../../shared/tasks.service';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges, OnDestroy {
  savedTasks: Task[] = [];
  savedTasksSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private rotuer: Router,
    private tasksService: TasksService,
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.databaseService.getTasksFromDatabase().subscribe(tasks => {
      this.savedTasks = tasks;
      console.log(tasks);
    });

    // this.savedTasks = this.tasksService.getTasks();
    // this.tasksService.taskListUpdated
    //   .subscribe(
    //     (tasks: Task[]) => {
    //       this.savedTasks = tasks;
    //     }
    //   )

    this.savedTasksSub = this.tasksService.taskListUpdated.subscribe(
      (updatedTasksList: Task[]) => {
        this.savedTasks = [...updatedTasksList];
      }
    );

  }

  ngOnChanges() {

  }

  ngOnDestroy() {
    this.savedTasksSub.unsubscribe();
  }

  

  navigateToEditTaskRoute(id: string) {
    this.rotuer.navigate(['./', id, 'edit'], {
      relativeTo: this.route,
    });
  }

  navigateToDeleteAlertRoute(id: string) {
    this.rotuer.navigate(['./', id, 'delete'], {
      relativeTo: this.route,
    });
  }


}

