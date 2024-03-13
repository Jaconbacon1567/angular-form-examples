import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'basic-form',
        component: BasicFormComponent,
    }
];
