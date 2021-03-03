import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {UserDetails} from '../user-details';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userDetails = new UserDetails("","");
  constructor(private http:HttpClient , public router : Router) { }
  connect() {
    this.http.post("http://127.0.0.1:8000/api/login",this.userDetails).subscribe(
      (res: Array<any>)=>
      {
        console.log("response",res)
        localStorage.setItem('user', JSON.stringify(res[0]));//bech yekhdemha
        localStorage.setItem('connected', "true");
        window.location.href="/publications";
      }
      ,
      (err)=>
      {
        console.log("err"+JSON.stringify(this.userDetails));  


      })

  }
  ngOnInit(): void {

    localStorage.setItem('connected', 'false');
    localStorage.setItem('user','');
    localStorage.setItem('token','');

  }

}
