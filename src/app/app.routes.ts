import { Routes } from '@angular/router';
import { Apps } from './pages/apps/apps';
import { Info } from './pages/info/info';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
  {
    path: '',
    loadComponent: () => import('./pages/apps/apps').then((m) => m.Apps),
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info').then((m) => m.Info),
  },
];
