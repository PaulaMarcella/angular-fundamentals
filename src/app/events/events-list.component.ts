import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div class="col-md-5" *ngFor="let item of events">
        <event-thumbnail [event]="item"></event-thumbnail>
      </div>
    </div>
  </div> `,
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
