import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/applications/applications').then((m) => m.Applications),
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info').then((m) => m.Info),
  },
  {
    path: 'start',
    pathMatch: 'full',
    redirectTo: '',
  },
  { path: '**', redirectTo: '' },
];
