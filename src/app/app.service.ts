import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getToggles() {
    
     this.http.get('https://toggle-manager-api.herokuapp.com/api/users?access_token=8d5df920-452f-46d8-984f-0b4fb50dd8eb')
        .toPromise()
        .then(response => console.log(response))
        .catch(err => Promise.reject(err.message || err));

    return [{name: "isButtoneRed", value: true}, {name: "isButtoneWhite", value: false}];
  }

}
