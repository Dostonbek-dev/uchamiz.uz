import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(public http: HttpClient) {
  }

  sendRegister(username: string, password: string) {
    let body = {username: username, password: password,grant_type:'password'}
    let tokenStr = 'Bearer ' + 'd2ViOll5NWpydUJtbVdUakREajY=';
    const headers = {
      'content-type': 'application/json',
      'Authorization': tokenStr,
      'Access-Control-Allow-Origin':'http://localhost:4200'
    }
    return this.http.post<any>('http://localhost:8080/oauth/token', body, {headers: headers})
  }
}

