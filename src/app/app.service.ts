import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Request, RequestMethod, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; 

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getToggles(token) {
    return this.http
      .get('https://toggle-manager-api.herokuapp.com/api/users/59abcf98734d1d25a0f5dfba?access_token=' + token)
      .toPromise()
      .then(user => user.json())
      .catch(error => Promise.reject(error.message || error));
  }
}
