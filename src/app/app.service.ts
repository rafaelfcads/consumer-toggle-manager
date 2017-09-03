import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getToggles() {
    
     this.http.get('https://toggle-manager-api.herokuapp.com/api/users?access_token=23e9a9ac-ae4a-481f-8460-1a07e909671e')
        .toPromise()
        .then(response => console.log(response))
        .catch(err => Promise.reject(err.message || err));

    return [{name: "isButtoneRed", value: true}, {name: "isButtoneWhite", value: false}];
  }

}
