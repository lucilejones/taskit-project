import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Task } from './shared/task.model';
import { TasksService } from './shared/tasks.service';
import { DatabaseService } from './shared/database.service';

export const taskResolver: ResolveFn<Task[]> = () => {
    const tasks = inject(TasksService).getTasks();

    if (tasks?.length === 0) {
        return inject(DatabaseService).getTasksFromDatabase() || [];
    } else {
        return tasks;
    }
}