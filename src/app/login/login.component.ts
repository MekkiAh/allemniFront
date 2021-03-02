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
    this.http.post("",this.userDetails).subscribe(
      (res)=>
      {
        localStorage.setItem('token', String(res));//bech yekhdemha
        localStorage.setItem('user', JSON.stringify(res));//bech yekhdemha
        localStorage.setItem('connected', "true");
       // this.router.navigate(['/publications']);
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
