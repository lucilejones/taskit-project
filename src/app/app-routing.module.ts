import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', component: LandingPageComponent},
    // { path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: 'home', component: LandingPageComponent},
    // { path: 'dashboard', component: DashboardComponent},
    { 
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
        ),
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}