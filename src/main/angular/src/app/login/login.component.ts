import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../core/service/user.service";
import {DataService} from "../core/service/dataservice.service";
import {SETTINGS} from "../core/settings/commons.settings";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  passWord: string;
  constructor(private httpClient: HttpClient,
              private router:Router
  ) {
  }

  ngOnInit() {
  }

  login() {
//   this.httpClient.post('api/login/get-user',{name: this.userName, password: this.passWord}).subscribe(data =>{
//     console.log(data);
//     this.router.navigateByUrl('/home');
//
// });
//     console.log(this.userName);
//     console.log(this.passWord);

    this.httpClient.post('api/login/get-user', {name: this.userName, password: this.passWord}).pipe(
      map((t: any) => {

      })
      , catchError(error => {
        console.log(error);
        return throwError('Request failed')
      })
    ).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl('/home');
      }
    );
  }

}
