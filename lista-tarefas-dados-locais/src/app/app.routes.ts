import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'lista-tarefas',
    loadComponent: () => import('./lista-tarefas/lista-tarefas.page').then( m => m.ListaTarefasPage)
  },
  {
    path: 'cadastra-tarefas',
    loadComponent: () => import('./cadastra-tarefas/cadastra-tarefas.page').then( m => m.CadastraTarefasPage)
  },
  {
    path: 'estatisticas-tarefas',
    loadComponent: () => import('./estatisticas-tarefas/estatisticas-tarefas.page').then( m => m.EstatisticasTarefasPage)
  },
];
