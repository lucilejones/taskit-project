import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class DatabaseService {
    readonly firebaseRootURL =
    'https://taskit-25b65-default-rtdb.firebaseio.com/tasks.json';

    constructor(
        private http: HttpClient,
        private tasksService: TasksService
    ) {}

    saveTasksToDatabase() {
        const myTasks = this.tasksService.getTasks();

        this.http.put(this.firebaseRootURL, myTasks).subscribe();
    }

    getTasksFromDatabase() {
        const myDatabaseTasks = this.http.get<Task[]>(this.firebaseRootURL)
        .pipe(
            tap((tasks: Task[]) => {
                console.log(tasks);
                this.tasksService.setTasks(tasks);
            })
        );
        return myDatabaseTasks;
    }

    deleteTaskFromDatabase(id: string) {
        // console.log(id);
        // this.http.delete(this.firebaseRootURL).subscribe();
        this.http.delete(`https://taskit-25b65-default-rtdb.firebaseio.com/tasks/${id}.json`).subscribe();

    }
}