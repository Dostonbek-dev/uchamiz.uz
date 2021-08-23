import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


const url = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class FormInputService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get( "/advertising-form");
  }

  turini_Tanlang(id: number) {
    return this.http.get( "/contract-site?afId=" + id)
  }

  vositani_tanlang(id: number) {
    console.log(id)
    return this.http.get("/adv-put-form/all/"+ id);
  }






  reklamaKiritish(
    contractId: string,
    day: string,
    descriptionUz: string,
    descriptionRu: string,
    price: string,
    name: string,
    type: string) {
    let rek = {
      'contractId': contractId, 'day': day, 'descriptionUz': descriptionUz,
      'descriptionRu': descriptionRu, 'price': price, 'name': name, 'type': type
    }
    const headers = { 'content-type': 'application/json'}
    console.log(rek)
    return this.http.post('localhost:8080/api/v1/adv-put-form', rek,{headers:headers});

  }


}
