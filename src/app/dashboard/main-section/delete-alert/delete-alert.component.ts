import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../../shared/task.model';
import { TasksService } from '../../shared/tasks.service';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.css']
})
export class DeleteAlertComponent {
  taskDetails: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const taskIdFromParams = params['id'];
      this.taskDetails = this.tasksService.getTaskById(taskIdFromParams);
    })
  }

  deleteTask(id: string) {
    this.tasksService.removeTask(id);
    this.databaseService.deleteTaskFromDatabase(id);
    this.router.navigate(['/dashboard']);
  }

  onClose() {
    this.router.navigate(['/dashboard']);
  }

}
