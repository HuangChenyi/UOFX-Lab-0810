import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UofxCameraPlugin, UofxGeolocationPlugin, UofxToastPlugin } from '@uofx/app-native';

import { BpmFwWriteComponent } from '@uofx/app-components/form';
import { ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-template-field',
  templateUrl: './template-field.component.html',
  styleUrls: ['./template-field.component.css']
})
export class TemplateFieldComponent extends BpmFwWriteComponent implements OnInit {
  // label: string = '🎉Hello World';
  form: FormGroup;
  value: any;

  constructor(private uofxGeolocation: UofxGeolocationPlugin, private cdr: ChangeDetectorRef,
    private uofxToast: UofxToastPlugin, private uofxCamera: UofxCameraPlugin,
    private fb: FormBuilder, private modalController: ModalController) {
    super();
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      message: this.value?.message || '',
    });
  }

}
