import { Routes } from '@angular/router';

import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Courses } from './pages/courses/courses';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: Courses },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
