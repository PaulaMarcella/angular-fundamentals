import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';

import {
  EventDetailsComponent,
  EventListResolver,
  EventsListComponent,
  CreateSessionComponent,
  EventResolver,
} from './events/index';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    // canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    // replaced by event route resolver
    // canActivate: [EventRouteActivator],
    resolve: { event: EventResolver },
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
    pathMatch: 'full',
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
