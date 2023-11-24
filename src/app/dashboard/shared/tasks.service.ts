import { EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';

export class TasksService {
  taskListUpdated = new Subject<Task[]>();

  // private savedTasks: Task[] = [];
  private savedTasks: Task[] = [
    new Task(
      1,
      'Clean art area',
      'Throw away old projects and organize markers.',
      '2023-11-30',
      'Medium',
      'To Do'
    ),
    new Task(
      2,
      'Make apple pie',
      'Make crust ahead of time.',
      '2023-12-5',
      'High',
      'To Do'
    )
  ];


  getTasks() {
    return this.savedTasks.slice();
  }

  getTaskById(id: number) {
    const foundTask = this.savedTasks.find((task) => task.id === id);

    return foundTask;
  }

  addTask(newTask: Task) {
    this.savedTasks.push(newTask);
    this.taskListUpdated.next(this.savedTasks.slice());
  }

  updateTask(taskId: number, updatedTaskValues: Partial<Task>) {
    const taskIndex = this.savedTasks.findIndex((task) => task.id === taskId);

    if(taskIndex !== -1) {
      this.savedTasks[taskIndex] = {
        ...this.savedTasks[taskIndex],
        ...updatedTaskValues,
        id: taskId
      };

      this.taskListUpdated.next(this.savedTasks.slice());
    }
    else {
      console.error('Task not found');
    }
  }

  setTasks(tasks: Task[]) {
    this.savedTasks = tasks;
    this.taskListUpdated.next(this.savedTasks.slice());
  }

  removeTask(id: number) {
    const newTaskList = this.savedTasks.filter((task) => task.id !== id);

    this.savedTasks = newTaskList;
    this.taskListUpdated.next(this.savedTasks.slice());
  }
  
}



