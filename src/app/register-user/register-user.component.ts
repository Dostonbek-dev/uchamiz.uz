import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  username:any
  password:any
  fullname:any
  ROLE:any
  ngOnInit(): void {
  }
  constructor(private http:HttpClient) {
  }

  save() {
    console.log(this.fullname)
    let body={'username':this.username,'password':this.password,'fullName':this.fullname,
      'role':this.ROLE}
    return  this.http.post('localhost:8080/user',body).subscribe(
      data=>{
        console.log(data);
      }
    );
  }

  getUser() {
    this.http.get('/user/1').subscribe(
    data=>{
      console.log(data);
    }
    )
  }
 getAdv() {
    this.http.get('/adv-put-form/all/3').subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
