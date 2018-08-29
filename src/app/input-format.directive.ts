import { element } from 'protractor';
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appInputFormat')
  format: string;

  constructor(private el: ElementRef) {}

  @HostListener('focus')
  onFocus() {
    console.log('onFocus Format: ' + this.format);
    let value: string = this.el.nativeElement.value;

    switch (this.format) {
      case 'lower':
        value = value.toUpperCase();
        break;

      case 'upper':
        value = value.toLowerCase();
        break;

      default:
        value = value.trim();
        break;
    }

    this.el.nativeElement.value = value.trim();
  }

  @HostListener('blur')
  onBlur() {
    console.log('onBlur  Format: ' + this.format);
    let value: string = this.el.nativeElement.value;

    switch (this.format) {
      case 'lower':
        value = value.toLowerCase();
        break;

      case 'upper':
        value = value.toUpperCase();
        break;

      default:
        value = value.trim();
        break;
    }

    this.el.nativeElement.value = value.trim();
  }
}
