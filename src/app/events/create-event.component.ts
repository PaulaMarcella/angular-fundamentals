import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `<h1>New Event</h1>
    <hr />
    <hr />
    <div class="col-md-6">
      <h3>FORM HERE</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-primary" (click)="cancel()">
        Cancel
      </button>
    </div>`,
})
export class CreateEventComponent {
  isDirty: boolean = false;

  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/events']);
  }
}
