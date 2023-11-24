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
      '2023-11-30',
      'Medium',
      'To Do',
      ['edit', 'delete']
    ),
    new Task(
      2,
      'Make apple pie',
      'Make crust ahead of time.',
      '2023-12-5',
      'High',
      'To Do',
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

  updateTask(taskId: number, updatedTaskValues: Partial<Task>) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if(taskIndex !== -1) {
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        ...updatedTaskValues
      };

      this.taskListUpdated.next(this.tasks.slice());
    }
    else {
      console.error('Task not found');
    }
  }

  removeTask(id: number) {
    const newTaskList = this.tasks.filter((task) => task.id !== id);

    this.tasks = newTaskList;
    this.taskListUpdated.next(this.tasks.slice());
  }
  
}



