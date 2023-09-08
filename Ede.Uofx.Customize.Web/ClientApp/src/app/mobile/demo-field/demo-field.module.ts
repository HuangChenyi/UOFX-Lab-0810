import { BASIC_HTTP_HANDLER, BasicHttpHandler } from '@service/basic-http-handler';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UofxCameraPlugin, UofxGeolocationPlugin, UofxToastPlugin } from '@uofx/app-native';

import { BasicHttpClient } from '@service/basic-http-client';
import { CommonModule } from '@angular/common';
import { CustomerService } from '@service/customer.service';
import { DemoFieldComponent } from './demo-field.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SelectCustomerComponent } from './select-customer/select-customer.component';
import { TranslateModule } from '@ngx-translate/core';
import { UofxFormFieldBaseModule } from '@uofx/app-components/form';
import { UofxPluginApiService } from '@uofx/plugin-api';

const UOF_MODULES = [
  UofxFormFieldBaseModule,
];

const COMPONENTS = [
  DemoFieldComponent
];

const BASIC_SERVICES = [
  { provide: BASIC_HTTP_HANDLER, useClass: BasicHttpHandler },
  BasicHttpClient,CustomerService
];

const UOF_PLUGINS = [
    UofxGeolocationPlugin,
  UofxToastPlugin,
  UofxCameraPlugin
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: DemoFieldComponent, pathMatch: 'full' }
    ]),
    TranslateModule.forChild(),
    IonicModule,
    ...UOF_MODULES,
  ],
  providers: [UofxPluginApiService,...UOF_PLUGINS,...BASIC_SERVICES],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...COMPONENTS, SelectCustomerComponent]
})
export class DemoFieldAppModule {
  static comp = {
    write: DemoFieldComponent,
    view: DemoFieldComponent
  }
}
