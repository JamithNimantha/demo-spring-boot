import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {AlertService} from "./core/service/alert.service";
import {CommonService} from "./core/service/common.service";
import {DataService} from "./core/service/dataservice.service";
import {UserService} from "./core/service/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
// import {ToastrModule} from "ng6-toastr-notifications";
import {MasterService} from "./core/service/master.service";
// import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
// import {ModalComponent} from "./core/directive/modal.component";
import {ModalService} from "./core/service/modal.service";


const appRoute: Routes =[
  {path : '' , component : LoginComponent},
  {path : 'home' , component : HomeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [AlertService,CommonService,DataService,UserService,MasterService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
