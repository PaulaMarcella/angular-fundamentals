import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  // EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  EventResolver,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {} from './common/toastr.service';
import {
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
} from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    NavBarComponent,
    SessionListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    // replaced by activator
    // EventRouteActivator,
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
