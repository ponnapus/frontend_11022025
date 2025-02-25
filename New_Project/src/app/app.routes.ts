import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: HomeComponent }, // New route for Profile
];
