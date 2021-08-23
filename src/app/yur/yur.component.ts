import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {YurServiceService} from "../service/yur-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-yur',
  templateUrl: './yur.component.html',
  styleUrls: ['./yur.component.css']
})
export class YurComponent implements OnInit {
  nomerKodi=1212
  myDate=new Date()

  getCode: any;

  getDate:any

  firmaNomi: any
  manzili: any
  sitr: any
  bankMalumotlari: any
  BMM_mfo: any
  hr: any
  derektorFio: any

  checkedDisableted = false;
  openMoDal = 'none';
  //@ts-ignore
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private service:YurServiceService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  showChack(event: any) {
    this.service.getCode().subscribe(
      data=>{
        this.getCode=data;
      }
    );
    this.getDate=new Date();
    // @ts-ignore
    document.getElementById('btnDisable').disabled = event.target.value == '';
    this.openMoDal = 'block';
  }

  closeModal() {
    // @ts-ignore
    document.getElementById('flexCheckDefault').disabled = event.target.value == '';
    this.openMoDal = 'none'
    this.checkedDisableted = true
    console.log("cdmksdkj")
  }


  add() {
    this.service.add(this.firmaNomi, this.manzili, this.bankMalumotlari, this.BMM_mfo, this.hr
      , this.derektorFio, this.sitr)
    console.log(this.angForm.value.fio)
   this.angForm.reset();

  }

  private createForm() {
    this.angForm = this.fb.group({
      fio: ['', Validators.required ],
      manzil:['',Validators.required ],
      sitr:['',Validators.required ],
      bankMalumotlari:['',Validators.required],
      BMM_mfo:['', Validators.required],
      HR:['',Validators.required],
      DerektorFIO:['',Validators.required]
    });


  }
}
