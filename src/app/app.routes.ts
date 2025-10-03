import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Info } from './pages/info/info';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
  {
    path: 'start',
    loadComponent: () => import('./pages/start/start').then((m) => m.Start),
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info').then((m) => m.Info),
  },
];
