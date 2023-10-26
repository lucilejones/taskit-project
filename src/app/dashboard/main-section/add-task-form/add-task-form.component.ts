import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { TasksService } from '../../shared/tasks.service';
import { Task } from '../../shared/task.model';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  @Output() formClicked: EventEmitter<boolean> = new EventEmitter();

  priorityChoices: string[] = ['Low', 'Medium', 'High'];
  statusChoices: string[] = ['To Do', 'In Progress', 'Done'];
  taskForm = this.fb.group({
    title: ['', [Validators.required]],
    dueDate: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    status: ['', [Validators.required]],
    // actions: [[]]
  });
  // taskForm = new FormGroup({
  //   title: new FormControl(''),
  //   dueDate: new FormControl(''),
  //   priority: new FormControl(''),
  //   status: new FormControl(''),
  //   actions: new FormControl([])
  // });

  constructor(private fb: FormBuilder, private tasksService: TasksService) {}

  // newTask: Task = {...this.taskForm, actions: ['edit', 'delete']}

  onSubmit(form: NgForm) {
    if (this.taskForm.valid) {
      this.tasksService.tasks.push({...form.value, actions: ['edit', 'delete']});
      console.log(form.value);

    } else {
      console.log('Form is invalid.');
    };
    this.formClicked.emit(!this.formClicked);
    console.log(this.formClicked);
  }
}
