import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'fui-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormButtonComponent implements OnInit {

  @Input()
  title:string;

  @Input()
  icon:string;

  constructor() { }

  ngOnInit(): void {
  }

}
