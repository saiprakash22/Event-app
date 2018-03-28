import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events-list/shared/event.model';
import {EventService} from '../events-list/shared/event.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: ISession[];
  constructor(private authService: AuthService, private eventService : EventService) { }
searchSessions(searchTerm){
this.eventService.searchSessions(searchTerm).subscribe
(sessions => {
  this.foundSessions = sessions;
  console.log(this.foundSessions);
})
}
  ngOnInit() {
  }

}
