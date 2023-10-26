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

  removeTask(index: number) {
    if(index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  
}

// addTask function automatically refresh the list?
// when the form view closes it does a new render of the task list?
// but the remove/delete might need to subscribe, unless it opens a window and then closes
// the edit task will open a new view and then close also

