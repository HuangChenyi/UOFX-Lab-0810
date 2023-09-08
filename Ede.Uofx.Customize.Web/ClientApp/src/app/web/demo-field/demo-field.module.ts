/*
此為外掛欄位module的樣板，修改/置換的項事如下
修改import 各模式的Component
修改const COMPONENTS  各模式的Component
修改NgModule中的 RouterModule  各模式的Component
修改 class name 及各模式的module
*/

import {
  BASIC_HTTP_HANDLER,
  BasicHttpHandler,
} from '@service/basic-http-handler';
import {
  ButtonModule,
  CheckBoxModule,
  RadioButtonModule,
} from '@syncfusion/ej2-angular-buttons';
import {
  DatePickerModule,
  DateTimePickerModule,
} from '@syncfusion/ej2-angular-calendars';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule, PagerAllModule } from '@syncfusion/ej2-angular-grids';
import {
  NumericTextBoxModule,
  TextBoxModule,
} from '@syncfusion/ej2-angular-inputs';
import {
  UofxFormFieldBaseModule,
  UofxFormModule,
} from '@uofx/web-components/form';

import { BasicHttpClient } from '@service/basic-http-client';
import { CommonModule } from '@angular/common';
import { CustomerService } from '@service/customer.service';
import { DemoFieldPropsComponent } from './props/demo-field.props.component';
import { DemoFieldWriteComponent } from './write/demo-field.write.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectCustomerComponent } from './select-customer/select-customer.component';
import { TranslateModule } from '@ngx-translate/core';
import { UofxDialogModule } from '@uofx/web-components/dialog';
import { UofxIconModule } from '@uofx/web-components/icon';
import { UofxPluginApiService } from '@uofx/plugin-api';
import { UofxSelectModule } from '@uofx/web-components/select';
import { UofxToastModule } from '@uofx/web-components/toast';
import { UofxTooltipModule } from '@uofx/web-components/tooltip';
import { UofxTranslateModule } from '@uofx/web-components';
import { UofxUserSelectModule } from '@uofx/web-components/user-select';

/*↑↑↑↑修改import 各模式的Component↑↑↑↑*/

const EJS_MODULES = [
  ButtonModule,
  CheckBoxModule,
  DatePickerModule,
  DateTimePickerModule,
  DialogModule,
  DropDownListModule,
  GridModule,
  NumericTextBoxModule,
  RadioButtonModule,
  TextBoxModule,
  PagerAllModule,
];

const UOF_MODULES = [
  UofxDialogModule,
  UofxFormFieldBaseModule,
  UofxFormModule,
  UofxIconModule,
  UofxSelectModule,
  UofxToastModule,
  UofxTooltipModule,
  UofxTranslateModule,
  UofxUserSelectModule
];

/*修改*/
/*置換component名稱*/

const COMPONENTS = [DemoFieldPropsComponent, DemoFieldWriteComponent];

const BASIC_SERVICES = [
  { provide: BASIC_HTTP_HANDLER, useClass: BasicHttpHandler },
  BasicHttpClient,CustomerService
];

/*修改*/
/*置換component名稱*/
/*如果不看站台的預覽結果可不實作RouterModule.forChild*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'design', pathMatch: 'full' },
      { path: 'design', component: DemoFieldWriteComponent },
      { path: 'props', component: DemoFieldPropsComponent },
      { path: 'write', component: DemoFieldWriteComponent },
      { path: 'view', component: DemoFieldWriteComponent },
      //有app開發後再實作這段
      {
        path: 'app',
        loadChildren: () => import('../../mobile/demo-field/demo-field.module').then(m => m.DemoFieldAppModule)
      }
    ]),
    TranslateModule.forChild(),
    ...EJS_MODULES,
    ...UOF_MODULES,
  ],
  providers: [BASIC_SERVICES, UofxPluginApiService],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS, SelectCustomerComponent],
})

/*修改*/
/*置換component名稱、class名稱*/
export class DemoFieldModule {
  static comp = {
    props: DemoFieldPropsComponent,
    design: DemoFieldWriteComponent,
    write: DemoFieldWriteComponent,
    view: DemoFieldWriteComponent,
    print: DemoFieldWriteComponent,
  };
}
