import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: ` <div
    [routerLink]="['/events', event.id]"
    class="well hoverwell thumbnail"
  >
    <h2>{{ event?.name }}</h2>
    <hr />
    <div>Date: {{ event?.date }}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
      Time: {{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{ event?.price }}</div>
    <div>Date: {{ event?.date }}</div>
    <div [hidden]="!event?.location">
      <!-- <div *ngIf="event?.location"> -->

      <span>Location: {{ event?.location?.address }}</span>
      <span class="pad-left"
        >City: {{ event?.location?.city }}, Country:
        {{ event?.location?.country }}</span
      >
    </div>
    <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
  </div>`,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: 800;
      }
      .thumbnail {
        min-height: 280px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return { green: isEarlyStart, bold: isEarlyStart };
    if (this.event && this.event.time === '8:00 am') {
      return 'green bold';
      // return ['green', 'bold'];
    } else {
      return '';
      // return [];
    }
  }
}
