import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { TasksService } from '../../shared/tasks.service';
import { Task } from '../../shared/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() formClicked: EventEmitter<boolean> = new EventEmitter();

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


  constructor(private fb: FormBuilder, private tasksService: TasksService) {}

  onSubmit(form: NgForm) {
    if (this.taskForm.valid) {

      const newTask: Task = {
        id: +(Math.random() * 1000000).toFixed(0),
        ...form.value,
        actions: ['edit', 'delete']
      }

      this.tasksService.addTask(newTask);
      console.log("form value", form.value);
      console.log("tasks list", this.tasksService.getTasks());

    } else {
      console.log('Form is invalid.');
    };
    this.formClicked.emit(!this.formClicked);
    // console.log(this.formClicked);
  }

  onClose() {
    this.formClicked.emit(!this.formClicked);
}
}