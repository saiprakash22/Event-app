import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events-list/index'

import { AppComponent } from './app.component';

import { NavComponent } from '../app/nav/nav.component';
import { appRoutes } from './nav/routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [EventService,EventRouteActivator,
    EventListResolver, 
    AuthService,
  {provide:'canDeactivateCreateEvent', 
  useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function checkDirtyState( component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event,do u really want to cancel?')
  }
  return true
}