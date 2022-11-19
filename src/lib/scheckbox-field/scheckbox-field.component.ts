import {Component, Input, OnInit} from '@angular/core';
import {AbstractField} from '../sfield/abstract-field.component';

@Component({
  selector: 'fui-scheckbox-field',
  templateUrl: './scheckbox-field.component.html',
  styleUrls: ['./scheckbox-field.component.css'],
})
export class SCheckboxFieldComponent
  extends AbstractField<boolean>
  implements OnInit
{
  ngOnInit(): void {
    if (!this.value) {
      this.value = false;
    }
  }

  @Input('value')
  set setData(value) {
    this.value = value === 'true' || value === true;
  }
}
