// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./pages/auth/auth.routes').then(m => m.routes),
  },
  {
    path          : 'home',
    loadComponent : () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  {
    path          : '**',
    loadComponent : () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];