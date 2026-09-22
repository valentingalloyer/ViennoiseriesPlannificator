import { Routes } from '@angular/router';
import { ViennoiserieDetailsComponent } from './components/viennoiserie-details/viennoiserie-details';
import { HomePage } from './components/home-page/home-page';
import { AdminCatalogue } from './components/admin-catalogue/admin-catalogue';
import { adminGuard } from './adminGuard';
import { LoginComponent } from './components/login-component/login-component';
import { AdminUsers } from './components/admin-users/admin-users';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'connexion', component: LoginComponent },
  { path: 'viennoiserie/:id', component: ViennoiserieDetailsComponent },
  {
    path: 'admin',
    canActivate: [adminGuard],
    // Exemple de Lazy Loading pour le composant parent
    loadComponent: () =>
      import('./components/admin-dashboard/admin-dashboard').then((m) => m.AdminDashboard),
    children: [
      { path: 'catalogue', component: AdminCatalogue },
      { path: 'users', component: AdminUsers },
      { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
    ],
  },
];
