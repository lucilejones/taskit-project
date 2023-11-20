import { EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';

export class TasksService {
  taskListUpdated = new Subject<Task[]>();

  private tasks: Task[] = [
    new Task(
      1,
      'Clean art area',
      'Throw away old projects and organize markers.',
      'Oct 20, 2023',
      'Medium',
      'To do',
      ['edit', 'delete']
    ),
    new Task(
      2,
      'Make apple pie',
      'Make crust ahead of time.',
      'Oct 31, 2023',
      'High',
      'To do',
      ['edit', 'delete']
    )
  ];

  getTasks() {
    return this.tasks.slice();
  }

  getTaskById(id: number) {
    const foundTask = this.tasks.find((task) => task.id === id);

    return foundTask;
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    this.taskListUpdated.next(this.tasks.slice());
  }

  removeTask(index: number) {
    if(index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  
}

// but the remove/delete might need to subscribe, unless it opens a window and then closes


