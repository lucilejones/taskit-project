import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { }

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { TaskListComponent } from './main-section/task-list/task-list.component';
import { AddTaskFormComponent } from './main-section/add-task-form/add-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainSectionComponent,
    TaskListComponent,
    AddTaskFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
