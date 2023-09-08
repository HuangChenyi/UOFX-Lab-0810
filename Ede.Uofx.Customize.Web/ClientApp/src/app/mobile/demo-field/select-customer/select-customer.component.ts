import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { CustomerService } from '@service/customer.service';
import { DemoFieldInfo } from 'src/app/web/demo-field/write/demo-field.write.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.css']
})
export class SelectCustomerComponent implements OnInit {

  @Input() apiURL: string;
  searchResult: Array<DemoFieldInfo>;
  constructor(public modalController: ModalController,
    private cdr: ChangeDetectorRef,
    private cs: CustomerService) { }


  //設定要回傳的參數
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  selectItem(item: DemoFieldInfo) {

    this.modalController.dismiss({
      'item': item
    });
  }

  ngOnInit(): void {
    this.cs.serverUrl = this.apiURL;
    this.cs.getbanks().subscribe(res => {

      this.searchResult = [...res];
    })


  }

}
