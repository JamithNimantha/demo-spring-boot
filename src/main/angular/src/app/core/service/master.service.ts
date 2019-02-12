import { Injectable } from '@angular/core';
// import {LocalStorage, LocalStorageService} from "ngx-webstorage";

@Injectable()
export class MasterService {
  // @LocalStorage("MASTER_DISTRICT_LIST")
  private districtList:any[];
  // @LocalStorage("MASTER_USER_DISTRICT")
  private district;
  // @LocalStorage("MASTER_USER_DIV_SEC")
  private divSec;
  // @LocalStorage("MASTER_USER_GN_DIV")
  private gnDivision;

  constructor(
    // private localSt:LocalStorageService
  ) { }

  getDistrictList(){
    return this.districtList;
  }

  // setDistrictList(districts:any[]){
  //   this.districtList=districts;
  //   this.localSt.store("MASTER_DISTRICT_LIST",districts);
  // }

  // setUserDetails(district,divSec,gnDivision){
  //   this.district=district;
  //   this.localSt.store("MASTER_USER_DISTRICT",district);
  //   this.divSec=divSec;
  //   this.localSt.store("MASTER_USER_DIV_SEC",divSec);
  //   this.gnDivision=gnDivision;
  //   this.localSt.store("MASTER_USER_GN_DIV",gnDivision);
  // }

  getUserPreferedDivSec(){
    if(this.divSec!=null){
      let master=this;
      this.districtList.forEach(function (district) {
        district.districtSecretaryList.forEach(function (divSec) {
          if(master.divSec.districtSecretaryId==divSec.districtSecretaryId){
            return {district:district,districtSecretary:divSec};
          }
        })
      })
    }
    return {district:this.districtList[0],districtSecretary:this.districtList[0].districtSecretaryList[0]};
  }
}
