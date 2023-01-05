import { Injectable } from '@angular/core';

declare let toastr: any;
@Injectable()
export class ToastrService {
  success(message: string) {
    console.log('Mock toast: ', message);
  }
  warn(message: string) {
    console.log('Mock toast: ', message);
  }
  info(message: string) {
    console.log('Mock toast: ', message);
  }
  error(message: string) {
    console.log('Mock toast: ', message);
  }
}
