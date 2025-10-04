import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/apps/apps').then((m) => m.Apps),
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info').then((m) => m.Info),
  },
];
