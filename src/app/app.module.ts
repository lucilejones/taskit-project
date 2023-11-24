import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LandingPageModule } from './landing-page/landing-page.module';

import { TasksService } from './dashboard/shared/tasks.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DashboardModule,
    LandingPageModule
  ],
  exports: [ReactiveFormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
