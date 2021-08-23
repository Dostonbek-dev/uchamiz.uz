import {Component, OnInit} from '@angular/core';
import {FormInputService} from "../service/form-input.service";

@Component({
  selector: 'app-admin-adw',
  templateUrl: './admin-adw.component.html',
  styleUrls: ['./admin-adw.component.css']
})
export class AdminAdwComponent implements OnInit {


  contractId: any
  day: any
  descriptionUz: any
  descriptionRu: any
  price: any
  name: any
  type: any

  constructor(public service: FormInputService) {
  }

  ngOnInit(): void {
  }

  save() {
    this.service.reklamaKiritish(this.contractId, this.day, this.descriptionUz, this.descriptionRu
      , this.price, this.name, this.type).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
