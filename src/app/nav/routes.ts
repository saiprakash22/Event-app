import  { Routes } from '@angular/router'
import {
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    EventsListComponent
} from '../events-list/index'
import {Error404Component} from '../errors/404.component';
import {CreateSessionComponent} from '../events-list/event-details/create-session.componet'


export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve:
    {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent,
     canActivate:[EventRouteActivator]},
     {path:'events/session/new', component: CreateSessionComponent},
    {path:'404', component: Error404Component},
    { path:'', redirectTo: '/events', pathMatch: 'full'},
    { path:'user', loadChildren: 'app/user/user.module#UserModule'}
]