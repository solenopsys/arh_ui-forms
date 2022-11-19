import {Component, OnInit} from '@angular/core';
import {AbstractField} from '../sfield/abstract-field.component';

@Component({
  selector: 'fui-snumber-field',
  templateUrl: './snumber-field.component.html',
  styleUrls: ['./snumber-field.component.css'],
})
export class SNumberFieldComponent
  extends AbstractField<number>
  implements OnInit
{
  ngOnInit(): void {}
}
