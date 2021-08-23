import {Component, OnInit} from '@angular/core';
import {FizServiceService} from "../service/fiz-service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-jis',
  templateUrl: './jis.component.html',
  styleUrls: ['./jis.component.css']
})
export class JisComponent implements OnInit {

  nomerKodi:any
  checkedDisableted = false;
  fio: any;
  passportSeria: any
  yashashManzil: any
  passpoortBerilgan: any
  telRaqam: any
  //@ts-ignore
  jisForm:FormGroup;

  myDate = new Date();

  openMoDal = 'none';

  constructor(private service:FizServiceService,private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {

  }
  private createForm(){
    this.jisForm=this.fb.group({
      'IsmFamilya':['',Validators.required],
      'pasportSeriya':['',Validators.required],
      'Yashashmanzil':['',Validators.required],
      'Berilgan':['',Validators.required],
      'TelRaqam':['',Validators.required],
    })
  }

  showChack(event: any) {
    this.service.getCode().subscribe(
     data=>{
             this.nomerKodi=data;
     }
    );
    // @ts-ignore
    document.getElementById('btnDisable').disabled = event.target.value == '';
    this.openMoDal = 'block';
  }

  closeModal() {
    // @ts-ignore
    document.getElementById('flexCheckDefault').disabled = event.target.value == '';
    this.openMoDal = 'none'
    this.checkedDisableted = true
  }

  add() {
   this.service.add(this.fio,this.passportSeria,this.yashashManzil,this.passpoortBerilgan,this.telRaqam)
   console.log(this.jisForm.value.IsmFamilya);
    this.jisForm.reset();

  }
}
