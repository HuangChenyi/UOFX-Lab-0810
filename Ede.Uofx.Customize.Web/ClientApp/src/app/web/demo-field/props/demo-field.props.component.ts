/*
此為外掛欄位prop mode的樣板，修改/置換的項事如下
修改selector和templateUrl路徑
修改classname
修改 @Input() exProps 的interface
修改及設定 exProps的interface 名稱和結構
*/

import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

import { BpmFwPropsComponent } from '@uofx/web-components/form';

/*修改*/
/*置換selector和templateUrl*/

@Component({
  selector: 'uofx-template-field-props-component',
  templateUrl: './demo-field.props.component.html',
})

/*修改*/
/*置換class名稱，exProps的interface名稱*/
export class DemoFieldPropsComponent
  extends BpmFwPropsComponent
  implements OnInit
{
  form: FormGroup;
  @Input() exProps: DemoFieldExProps;

  isShowHelloWorld: boolean;
  constructor(public fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    this.initExProps();
    this.initForm();

    /*外掛欄位額外屬性設定(條件站點、簽核條件、主旨....)*/
    this.initPluginSettings({
      /*toBeConditions外掛欄位條件來源、name表單設計顯示條件名稱、
      jsonPath欄位值來源、type條件型態、Text(文字)、Numeric(數值)、Department(部門)、Employee(人員)*/

      /*toBeSubjects表單主旨資料來源，name主旨名稱 jsonPath欄位值來源*/
      toBeSubjects: [{ name: '公司名稱', jsonPath: 'companyName' },
      { name: '電話', jsonPath: 'phone' }],

    });
  }

  initExProps() {
    if (!this.exProps) {
      // 初始化設定額外屬性
      this.exProps = {
        isShowHelloWorld: false,
        apiURL:""
      };
    } else {
      // 若已有存在的 exProps
      // 看是需要更新還是重設 value
    }
  }

  initForm() {
    Object.keys(this.exProps).forEach((k) => {
      this.addFormControl(k, null);
    });
    this.form.setValue(this.exProps);
  }
}

/*修改*/
/*置換interface名稱*/
export interface DemoFieldExProps {
  isShowHelloWorld: boolean;
  apiURL:string;

}
