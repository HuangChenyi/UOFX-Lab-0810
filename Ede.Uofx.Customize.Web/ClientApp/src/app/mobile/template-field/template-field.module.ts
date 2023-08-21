import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UofxCameraPlugin, UofxGeolocationPlugin, UofxToastPlugin } from '@uofx/app-native';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TemplateFieldComponent } from './template-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { UofxFormFieldBaseModule } from '@uofx/app-components/form';
import { UofxPluginApiService } from '@uofx/plugin-api';

const UOF_MODULES = [
  UofxFormFieldBaseModule,
];

const COMPONENTS = [
  TemplateFieldComponent
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
      { path: '', component: TemplateFieldComponent, pathMatch: 'full' }
    ]),
    TranslateModule.forChild(),
    IonicModule,

    ...UOF_MODULES,
  ],
  providers: [UofxPluginApiService,...UOF_PLUGINS],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...COMPONENTS]
})
export class TemplateFieldAppModule {
  static comp = {
    write: TemplateFieldComponent,
    view: TemplateFieldComponent
  }
}
