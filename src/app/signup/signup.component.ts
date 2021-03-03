import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import {User} from '../user'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user = new User("","","","","","",0,"")
  constructor(private http : HttpClient) { }
  addUser(){
    console.log("this. user",this.user)
    this.http.post("http://127.0.0.1:8000/api/utilisateurs",this.user).subscribe(
      res=>   {window.location.href="/login"}
    );
  }
  ngOnInit(): void {
  }

}
