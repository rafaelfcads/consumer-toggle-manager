import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getToggles() {

    const oauthUrl = "https://toggle-manager-api.herokuapp.com/api/oauth/token?grant_type=password&username=rafa&password=rafa";
    let body = {};

    let username: string = 'rafa';
    let password: string = 'rafa';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV01"); 
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    this.http.post(oauthUrl, body, {headers: headers})
    .toPromise()
    .then(response => console.log(response))
    .catch(err => Promise.reject(err.message || err));
    
    //  this.http
    //     .get('https://toggle-manager-api.herokuapp.com/api/users?access_token=23e9a9ac-ae4a-481f-8460-1a07e909671e')
    //     .toPromise()
    //     .then(response => console.log(response))
    //     .catch(err => Promise.reject(err.message || err));

    return [{name: "isButtoneRed", value: true}, {name: "isButtoneWhite", value: false}];
  }

}
