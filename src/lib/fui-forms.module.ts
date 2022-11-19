import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SFormComponent} from './sform/sform.component';
import {SFieldComponent} from './sfield/sfield.component';
import {STextFieldComponent} from './stext-field/stext-field.component';
import {SCheckboxFieldComponent} from './scheckbox-field/scheckbox-field.component';
import {FormsModule} from '@angular/forms';
import {SNumberFieldComponent} from './snumber-field/snumber-field.component';
import {SDateFieldComponent} from './sdate-field/sdate-field.component';
import {SSelectEntityComponent,} from './sselect-enity/s-select-entity.component';
import {SMultilineTexFieldComponent} from './smultiline-tex-field/smultiline-tex-field.component';
import {SuidFieldComponent} from './suid-field/suid-field.component';
import {SFileFieldComponent} from './sfile-field/sfile-field.component';
import {SCodeFieldComponent} from './scode-field/scode-field.component';
import {SDataViewComponent} from './sdata-view/sdata-view.component';
import {BrowserModule} from "@angular/platform-browser";

import { FormButtonComponent } from './form-button/form-button.component';
import { FuiIconsModule } from "@solenopsys/uimatrix-icons";
import { UtilsModule } from "@solenopsys/uimatrix-utils";

@NgModule({
  declarations: [

    SFormComponent,
    SFieldComponent,
    STextFieldComponent,
    SCheckboxFieldComponent,
    SNumberFieldComponent,
    SDateFieldComponent,
    SSelectEntityComponent,
    SMultilineTexFieldComponent,
    SuidFieldComponent,
    SFileFieldComponent,
    SCodeFieldComponent,
    SDataViewComponent,
    FormButtonComponent,
  ],
    imports: [CommonModule,
        BrowserModule,
        FormsModule,
        FuiIconsModule,
      UtilsModule],
  exports: [
    SFormComponent,
    SFieldComponent,
    STextFieldComponent,
    SNumberFieldComponent,
    SDateFieldComponent,
    SSelectEntityComponent,
    SFileFieldComponent,
    SCodeFieldComponent,
    FormButtonComponent,
  ],
})
export class FuiFormsModule {
}
