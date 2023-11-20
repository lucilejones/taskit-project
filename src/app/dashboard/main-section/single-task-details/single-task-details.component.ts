import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../../shared/task.model';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-single-task-details',
  templateUrl: './single-task-details.component.html',
  styleUrls: ['./single-task-details.component.css']
})
export class SingleTaskDetailsComponent {
  taskDetails: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const taskIdFromParams = +params['id'];
      this.taskDetails = this.taskService.getTaskById(taskIdFromParams);
    })
  }

  onClose() {
    this.router.navigate(['/dashboard']);
  }

}
