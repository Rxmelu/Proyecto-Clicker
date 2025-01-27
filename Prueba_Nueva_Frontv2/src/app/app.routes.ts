import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina2',
    pathMatch: 'full',
  },
  {
    path: 'pagina2',
    loadComponent: () =>
      import('./pagina2/pagina2.page').then((m) => m.Pagina2Page),
  },
  {
    path: 'pagina3',
    loadComponent: () => import('./pagina3/pagina3.page').then( m => m.Pagina3Page)
  },
  {
    path: 'pagina1',
    loadComponent: () => import('./pagina1/pagina1.page').then( m => m.Pagina1Page)
  },
];
