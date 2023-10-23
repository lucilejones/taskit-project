import { Task } from './task.model';

export class TasksService {
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

  addTask(task: Task) {
    this.tasks.push(task);
  }
  
}