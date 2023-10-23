import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  // @Output() onAddFormClicked: EventEmitter<boolean> = new EventEmitter();
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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      // TODO add a service and a function to push this task to the tasks array
    } else {
      console.log('Form is invalid.');
    };
    // this.onAddFormClicked.emit();
  }
}
