import { Component, OnInit } from '@angular/core';
import { UofxDialog, UofxDialogController } from "@uofx/web-components/dialog";

import { FormDirtyConfirm } from "@uofx/core";

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.css']
})

export class SelectCustomerComponent extends UofxDialog implements OnInit {

  constructor(private dialogCtrl: UofxDialogController) {
    super();
  }

  ngOnInit(): void {
  }

  DoClose()
  {
this.close();


  }

}
