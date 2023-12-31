import { Component, OnInit } from '@angular/core';
import { UofxDialog, UofxDialogController } from "@uofx/web-components/dialog";

import { FormDirtyConfirm } from "@uofx/core";
import {
  Grid,
  GridComponent,
 PageSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import { DemoFieldInfo } from '../write/demo-field.write.component';
import { CustomerService } from '@service/customer.service';
@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.css']
})

export class SelectCustomerComponent extends UofxDialog implements OnInit {

/*any 為grid item的inerface物件*/
  searchResult: Array<DemoFieldInfo> = [];
/*searchResult Bind完後記得要再重設資料筆數*/
/*this.pageModel.totalCount = this.searchResult.length; */
pageModel = { currentPage: 1, pageCount: 5, pageSize: 10, totalCount: 40 };
initialPage = <PageSettingsModel>{
  currentPage: 1,
  pageCount: 2,
  pageSize: 10,
  totalRecordsCount: 20,
};

/*分頁器事件*/
onPagerClick(event) {
  if (event.isTrusted) return;
  if (this.pageModel.currentPage === event.currentPage) return;

  this.pageModel.currentPage = event.currentPage;

  this.initialPage = <PageSettingsModel>{
    currentPage: event.currentPage,
    pageCount: 2,
    pageSize: 10,
    totalRecordsCount: 20,
  };
}


  constructor(private dialogCtrl: UofxDialogController,
    private cs :CustomerService) {
    super();
  }

  ngOnInit(): void {
this.cs.serverUrl=this.params.apiurl;
    this.cs.getbanks().subscribe(res=>{
      this.searchResult=[...res];
    })
  }

  DoClose()
  {
this.close();


  }

  selectItem(item:DemoFieldInfo)
  {
    this.close(item);
  }

}
