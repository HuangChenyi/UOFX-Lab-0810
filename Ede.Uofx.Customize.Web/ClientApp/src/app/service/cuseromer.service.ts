import { BasicApiService } from './basic-api.service';
import { DemoFieldInfo } from '../web/demo-field/write/demo-field.write.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CuseromerService extends BasicApiService {

  getbanks()
  {
    return this.http.get<DemoFieldInfo[]>("http://192.168.1.28:8899/api/Banks/GetBank")
  }

}



