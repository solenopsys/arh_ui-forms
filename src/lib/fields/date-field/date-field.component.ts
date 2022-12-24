import {Component, Input, OnInit} from '@angular/core';
import {AbstractField} from '../../abstract-field.component';

@Component({
  selector: 'ui-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css'],
})
export class DateFieldComponent
  extends AbstractField<string>
  implements OnInit
{
  @Input()
  time = false;

  ngOnInit(): void {}

  extract() {
    const string1: string = this.value;
    if (string1) {
      return string1.split('T')[0];
    } else {
      return string1;
    }
  }

  transformBack($event) {
    this.valueChange.emit($event);
  }
}
