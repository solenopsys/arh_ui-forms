import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  template: ``,
})
export class AbstractField<TYPE> {
  @Input()
  title!: TYPE;

  @Input()
  value!: any;

  @Output()
  valueChange = new EventEmitter<TYPE>();

  @Input()
  width!: number;
}
