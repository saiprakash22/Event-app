import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { IEvent} from '../shared/index';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
@Input() event : IEvent
@Output() eventClick = new EventEmitter();
clickFn() {
  this.eventClick.emit(this.event.name);
}
  constructor() { }

  ngOnInit() {

  }

}
