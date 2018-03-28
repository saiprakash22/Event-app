import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './event.service'

@Component({
    templateUrl:"./create-event.component.html",
    styles:[`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :-ms-input-placeholder {color:#999;}
    `] 
})

export class CreateEventComponent {
    isDirty:boolean = true
    constructor(private router: Router, private eventService: EventService){

    }
    saveEvent(formvalues){
       this.eventService.saveEvent(formvalues)
       this.router.navigate(['/events'])
       
    }

    cancel(){
        this.router.navigate(['/events'])
    }
    
}