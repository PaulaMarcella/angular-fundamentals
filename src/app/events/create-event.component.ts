import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error ::ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  newEvent: any;
  isDirty: boolean = false;

  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues).subscribe((res) => {
      this.router.navigate(['/events']);
    });
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
