import {Component, Input, OnInit} from '@angular/core';
import { ViewType } from "@solenopsys/uimatrix-utils";

@Component({
  selector: 'fui-sdata-view',
  templateUrl: './sdata-view.component.html',
  styleUrls: ['./sdata-view.component.css'],
})
export class SDataViewComponent implements OnInit {
  @Input()
  config!: DataView;

  data!: any;

  SYMBOL = ViewType.ELECTRONIC_SYMBOL;
  LAYOUT = ViewType.ELECTRONIC_LAYOUT;
  PART_SYMBOL = ViewType.PART_SYMBOL;
  CELL = ViewType.CELL;

  constructor() {}

  @Input('data')
  set setData(data: string) {
    console.log('INPUT', data);
    this.data = JSON.parse(data);
    console.log('OUTPUT', this.data);
  }

  ngOnInit(): void {}
}
