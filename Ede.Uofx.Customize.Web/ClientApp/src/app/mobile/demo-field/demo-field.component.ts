import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UofxCameraPlugin, UofxGeolocationPlugin, UofxToastPlugin } from '@uofx/app-native';

import { BpmFwWriteComponent } from '@uofx/app-components/form';
import { ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectCustomerComponent } from './select-customer/select-customer.component';

@Component({
  selector: 'app-demo-field',
  templateUrl: './demo-field.component.html',
  styleUrls: ['./demo-field.component.css']
})
export class DemoFieldComponent extends BpmFwWriteComponent implements OnInit {
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
      companyName: '',
      address: '',
      phone: ''
    });
    if (this.value) {
      this.form.setValue(this.value);
    }

    this.form.valueChanges.subscribe((res) => {
      this.selfControl?.setValue(res);
      /*真正送出欄位值變更的函式*/
      this.valueChanges.emit(res);
    });
    this.cdr.detectChanges();
  }

  openModal() {
    this.presentModal().then(res => {
      res.onWillDismiss().then(resM => {
        //關閉視窗帶回的參數resM.data

        if (resM.data.item) {
            this.form.controls.companyName.setValue(resM.data.item.companyName);
            this.form.controls.address.setValue(resM.data.item.address);
            this.form.controls.phone.setValue(resM.data.item.phone);
        }

        this.cdr.detectChanges();
      });
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SelectCustomerComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        //傳給Modal參數
        apiURL: this.pluginSetting.entryHost
      }
    });
    await modal.present();
    return modal;
  }

}
