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

    updateTasksToDatabase() {
        const myTasks = this.tasksService.getTasks();

        this.http.put(this.firebaseRootURL, myTasks).subscribe();
    }

    // addTaskToDatabase(newTask: Task) {
    //     this.http.post(this.firebaseRootURL, newTask).subscribe();
    // }
    addTaskToDatabase(newTask: Task) {
        return this.http.post(this.firebaseRootURL, newTask)
        .pipe(
            tap((task: Task) => {
                console.log(task);
                // this.tasksService.getTasks();
                this.getTasksFromDatabase().subscribe();
            })
        )
    }

    getTasksFromDatabase() {
        // const myDatabaseTasks = this.http.get<Task[]>(this.firebaseRootURL)
        // .pipe(
        //     tap((tasks: Task[]) => {
        //         console.log(tasks);
        //         this.tasksService.setTasks(tasks);
        //     })
        // );
        // return myDatabaseTasks;
        // <{[key: string]: Task}>
        return this.http.get<{[key: string]: Task}>(this.firebaseRootURL)
        .pipe(
            map(resData => {
                const tasksArray: Task[] = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key)) {
                        tasksArray.push({...resData[key], id: key})
                    }
                }
                console.log(tasksArray);
                return tasksArray;
                
            }),
            tap((tasks: Task[]) => {
                console.log(tasks);
                this.tasksService.setTasks(tasks);
            })
        )
            // .subscribe(tasks => {
            //     console.log(tasks);
            // });

    }

    deleteTaskFromDatabase(id: string) {
        // console.log(id);
        // this.http.delete(this.firebaseRootURL).subscribe();
        this.http.delete(`https://taskit-25b65-default-rtdb.firebaseio.com/tasks/${id}.json`).subscribe();
    }
}