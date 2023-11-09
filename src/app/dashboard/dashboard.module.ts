import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './main-section/task-list/task-list.component';
import { AddTaskFormComponent } from './main-section/add-task-form/add-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    MainSectionComponent,
    TaskListComponent,
    AddTaskFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
