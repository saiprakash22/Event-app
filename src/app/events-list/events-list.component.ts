import { Component, OnInit } from '@angular/core';
import {EventService} from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any
    clickFn(data){
    console.log('recieved:',data);
  }
  constructor(private eventService: EventService, private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

}
