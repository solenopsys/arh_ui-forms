import { Component, Input, OnInit } from "@angular/core";
import {AbstractField} from '../sfield/abstract-field.component';

@Component({
  selector: 'fui-stext-field',
  templateUrl: './stext-field.component.html',
  styleUrls: ['./stext-field.component.css'],
})
export class STextFieldComponent
  extends AbstractField<string>


  implements OnInit
{
  @Input()
  password=false;
  ngOnInit(): void {}
}
