import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-login',
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
  {
    path: 'pagina-login',
    loadComponent: () => import('./pagina-login/pagina-login.page').then( m => m.PaginaLoginPage)
  },  {
    path: 'pagina-upgrades',
    loadComponent: () => import('./pagina-upgrades/pagina-upgrades.page').then( m => m.PaginaUpgradesPage)
  },

];
