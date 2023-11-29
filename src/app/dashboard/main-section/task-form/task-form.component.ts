import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TasksService } from '../../shared/tasks.service';
import { Task } from '../../shared/task.model';
import { DatabaseService } from '../../shared/database.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {

  isEditingTask: boolean = false;
  isTaskFormSubmitted: boolean = false;
  taskId: string | null = null;
  taskDetails: Partial<Task> = {
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    status: ''
  }

  priorityChoices: string[] = ['Low', 'Medium', 'High'];
  statusChoices: string[] = ['To Do', 'In Progress', 'Done'];
  taskForm = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    dueDate: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    status: ['', [Validators.required]],
    // actions: [[]]
  });


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private tasksService: TasksService,
    private databaseService: DatabaseService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskId = params['id'];
      console.log(this.taskId);

      this.isEditingTask = !!this.taskId;

      if(this.isEditingTask) {
        const editingTask = this.tasksService.getTaskById(this.taskId);
        console.log(editingTask);
        console.log(this.taskId);

        if(editingTask) {
          this.taskDetails = {
            title: editingTask.title,
            description: editingTask.description,
            dueDate: editingTask.dueDate,
            priority: editingTask.priority,
            status: editingTask.status
          };
          this.taskForm.patchValue({
            title: editingTask.title,
            description: editingTask.description,
            dueDate: editingTask.dueDate,
            priority: editingTask.priority,
            status: editingTask.status
          })
        }
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.taskDetails = {
      title: form.value.title,
      description: form.value.description,
      dueDate: form.value.dueDate,
      priority: form.value.priority,
      status: form.value.status
    }

    if (this.isEditingTask) {
      this.tasksService.updateTask(this.taskId, this.taskDetails);
      this.databaseService.updateTasksToDatabase();
      console.log(this.taskId);
    } else {
      const newTask: Task = {
        // id: +(Math.random() * 1000000).toFixed(0),
        ...form.value
      }

      
      this.databaseService.addTaskToDatabase(newTask).subscribe();
      this.tasksService.addTask(newTask);
      // console.log("form value", form.value);
      // console.log("tasks list", this.tasksService.getTasks());
    }

    // this.databaseService.getTasksFromDatabase().subscribe();

    this.router.navigate(['/dashboard']);
  }

  onClose() {
    this.router.navigate(['/dashboard']);
}
}
