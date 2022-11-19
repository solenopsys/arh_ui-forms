import {Component, OnInit} from '@angular/core';
import {AbstractField} from '../sfield/abstract-field.component';

@Component({
  selector: 'fui-suid-field',
  templateUrl: './suid-field.component.html',
  styleUrls: ['./suid-field.component.css'],
})
export class SuidFieldComponent
  extends AbstractField<string>
  implements OnInit
{
  ngOnInit(): void {}
}
