import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../new-note/new-note.page').then((m) => m.NewNotePage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../home-notes/home-notes.page').then((m) => m.HomeNotesPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../about-me/about-me.page').then((m) => m.AboutMePage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
