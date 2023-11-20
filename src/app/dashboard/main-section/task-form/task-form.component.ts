import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TasksService } from '../../shared/tasks.service';
import { Task } from '../../shared/task.model';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() formClicked: EventEmitter<boolean> = new EventEmitter();

  isEditingTask: boolean = false;
  isTaskFormSubmitted: boolean = false;
  taskId: number | null = null;
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
    private tasksService: TasksService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskId = +params['id'];

      this.isEditingTask = !!this.taskId;

      if(this.isEditingTask) {
        const editingTask = this.tasksService.getTaskById(this.taskId);

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
    // this.formClicked.emit();
    this.router.navigate(['/dashboard']);
    // console.log(this.formClicked);
  }

  onClose() {
    // this.formClicked.emit();
    this.router.navigate(['/dashboard']);
}
}
