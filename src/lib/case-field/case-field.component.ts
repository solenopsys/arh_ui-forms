import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";
import { DataProvider, EntityTitle, FieldType, FormField } from "@solenopsys/uimatrix-utils";
import { ProviderService } from "../provider.service";


@Component({
  selector: 'ui-case-field',
  templateUrl: './ui-case-field.component.html',
  styleUrls: ['./ui-case-field.component.css'],
})
export class CaseFieldComponent implements OnInit {
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


  constructor(
    @Inject("ps")
    private ps: ProviderService
  ) {}

  ngOnInit(): void {}

  initProvider(toEntity: string): DataProvider {
    if (!toEntity) {
      throw new Error('ToEntity not set');
    }
    return this.ps.getProvider( toEntity);
  }
}
