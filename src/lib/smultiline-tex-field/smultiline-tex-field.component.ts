import {Component, OnInit} from '@angular/core';
import {AbstractField} from '../sfield/abstract-field.component';

@Component({
  selector: 'fui-smultiline-tex-field',
  templateUrl: './smultiline-tex-field.component.html',
  styleUrls: ['./smultiline-tex-field.component.css'],
})
export class SMultilineTexFieldComponent
  extends AbstractField<string>
  implements OnInit
{
  ngOnInit(): void {}
}
