import { Routes } from '@angular/router';
import { ViennoiserieDetailsComponent } from './components/viennoiserie-details/viennoiserie-details';
import { HomePage } from './components/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'viennoiserie/:id', component: ViennoiserieDetailsComponent },
];
