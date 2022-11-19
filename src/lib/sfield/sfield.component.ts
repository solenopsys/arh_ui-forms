import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DataProvider, EntityTitle, FieldType, FormField } from "@solenopsys/uimatrix-utils";
import { ProviderService } from "../provider.service";


@Component({
  selector: 'fui-sfield',
  templateUrl: './sfield.component.html',
  styleUrls: ['./sfield.component.css'],
})
export class SFieldComponent implements OnInit {
  FT = FieldType;

  @Input()
  config!: FormField;

  @Input()
  data!: string | number | boolean | Date | EntityTitle;

  @Output()
  dataChange = new EventEmitter<
    string | number | boolean | Date | EntityTitle
  >();

  @Input()
  width!: number;

  constructor(private ps: ProviderService) {}

  ngOnInit(): void {}

  initProvider(toEntity: string): DataProvider {
    if (!toEntity) {
      throw new Error('ToEntity not set');
    }
    return this.ps.getProvider( toEntity);
  }
}
