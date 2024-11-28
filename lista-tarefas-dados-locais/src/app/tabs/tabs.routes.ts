import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lista-tarefas',
        loadComponent: () => import('../lista-tarefas/lista-tarefas.page').then( m => m.ListaTarefasPage)
      },
      {
        path: 'cadastra-tarefas',
        loadComponent: () => import('../cadastra-tarefas/cadastra-tarefas.page').then( m => m.CadastraTarefasPage)
      },
      {
        path: 'estatisticas-tarefas',
        loadComponent: () => import('../estatisticas-tarefas/estatisticas-tarefas.page').then( m => m.EstatisticasTarefasPage)
      },
      {
        path: '',
        redirectTo: '/tabs/lista-tarefas',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/lista-tarefas',
    pathMatch: 'full',
  },
];
