import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form/form.component';
import {CaseFieldComponent} from './case-field/case-field.component';
import {TextFieldComponent} from './fields/text-field/text-field.component';
import {CheckboxFieldComponent} from './fields/checkbox-field/checkbox-field.component';
import {FormsModule} from '@angular/forms';
import {NumberFieldComponent} from './fields/number-field/number-field.component';
import {DateFieldComponent} from './fields/date-field/date-field.component';
import {SelectFieldComponent,} from './fields/select-field/select-field.component';
import {MultilineFieldComponent} from './fields/multiline-field/multiline-field.component';
import {UIdFieldComponent} from './fields/uid-field/uid-field.component';
import {FileFieldComponent} from './fields/file-field/file-field.component';
import {CodeFieldComponent} from './fields/code-field/code-field.component';
import {DataViewComponent} from '../../../controls/src/lib/data-view/data-view.component';
import {BrowserModule} from "@angular/platform-browser";
import {UIIconsModule} from "@solenopsys/uimatrix-icons";
import {DeclaredService, UtilsModule} from "@solenopsys/uimatrix-utils";

const components = [
    FormComponent,
    CaseFieldComponent,
    TextFieldComponent,
    CheckboxFieldComponent,
    NumberFieldComponent,
    DateFieldComponent,
    SelectFieldComponent,
    MultilineFieldComponent,
    UIdFieldComponent,
    FileFieldComponent,
    CodeFieldComponent,
    DataViewComponent,
];

@NgModule({
    declarations: components,
    imports: [CommonModule,
        BrowserModule,
        FormsModule,
        UIIconsModule,
        UtilsModule],
    exports: [
        FormComponent,
        CaseFieldComponent,
        TextFieldComponent,
        NumberFieldComponent,
        DateFieldComponent,
        SelectFieldComponent,
        FileFieldComponent,
        CodeFieldComponent,
    ],
})
export class UIFormsModule {


    constructor(private ds: DeclaredService) {
        ds.addComps("@solenopsys/uimatrix-forms", components)
    }
}
