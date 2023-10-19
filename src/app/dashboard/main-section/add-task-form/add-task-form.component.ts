import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  priorityChoices: string[] = ['High', 'Medium', 'Low']
  taskForm = new FormGroup({
    title: new FormControl(''),
    dueDate: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl(''),
    actions: new FormControl([])
  });

  onSubmit() {
    // TODO: add a new task to the tasks list
  }
}
