import { EventEmitter } from '@angular/core';
import { Task } from './task.model';

export class TasksService {
  taskListUpdated = new EventEmitter<Task[]>();

  private tasks: Task[] = [
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

  getTasks() {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.taskListUpdated.emit(this.tasks.slice());
  }

  removeTask(index: number) {
    if(index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  
}

// but the remove/delete might need to subscribe, unless it opens a window and then closes


