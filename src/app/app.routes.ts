import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'user',
    loadComponent: () =>
      import('./features/users/users-list/users-list')
        .then(m => m.UsersList)
  },
  {
    path : 'login',
    loadComponent :() => 
      import('./features/users/user-login/user-login')
      .then(m => m.UserLogin)
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
