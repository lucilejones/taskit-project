import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './main-section/task-list/task-list.component';
import { TaskFormComponent } from './main-section/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleTaskDetailsComponent } from './main-section/single-task-details/single-task-details.component';
import { DeleteAlertComponent } from './main-section/delete-alert/delete-alert.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'new', component: TaskFormComponent },
      { 
        path: ':id',
        component: SingleTaskDetailsComponent
      },
      { path: ':id/edit', component: TaskFormComponent },
      { path: ':id/delete', component: DeleteAlertComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    MainSectionComponent,
    TaskListComponent,
    TaskFormComponent,
    SingleTaskDetailsComponent,
    DeleteAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
