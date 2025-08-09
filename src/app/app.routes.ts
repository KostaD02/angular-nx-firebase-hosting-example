import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@angular-firebase-hosting-example/home').then((m) => m.Home),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('@angular-firebase-hosting-example/not-found').then(
        (m) => m.NotFound
      ),
  },
];
