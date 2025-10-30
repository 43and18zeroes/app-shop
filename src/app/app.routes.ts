import { Routes } from '@angular/router';
import { ProductDetails } from './components/product-details/product-details';
import { PRODUCT_PATH } from './pages/applications/applications.data';

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
  { path: `${PRODUCT_PATH}/:productId`, component: ProductDetails },
  { path: '**', redirectTo: '' },
];
