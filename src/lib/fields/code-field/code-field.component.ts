import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractField} from '../../abstract-field.component';
import { EntityTitle } from "@solenopsys/uimatrix-utils";


@Component({
  selector: 'ui-code-field',
  templateUrl: './code-field.component.html',
  styleUrls: ['./code-field.component.css'],
})
export class CodeFieldComponent
  extends AbstractField<EntityTitle>
  implements OnInit, OnDestroy
{
  @ViewChild('editor') editor: any;

  @Input()
  language: string;

  editorOptions: { theme: string; language: string }; // todo подключить тему и убрать хардкод

  ngOnInit(): void {
    this.editorOptions = {
      theme: true ? 'vs' : 'vs-dark',
      language: this.language,
    }; // todo подключить тему и убрать хардкод
  }

  public onInitEditor($event: any) {
    // See the editor component
    console.log('EDITOR', this.editor);
    console.log('EVENT', $event);
  }

  ngOnDestroy(): void {}
}
