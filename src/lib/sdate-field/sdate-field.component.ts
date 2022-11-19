import {Component, Input, OnInit} from '@angular/core';
import {AbstractField} from '../sfield/abstract-field.component';

@Component({
  selector: 'fui-sdate-field',
  templateUrl: './sdate-field.component.html',
  styleUrls: ['./sdate-field.component.css'],
})
export class SDateFieldComponent
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
