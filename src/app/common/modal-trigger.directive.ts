import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  @Input('modal-trigger') modalId: string;

  ngOnInit(): void {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
