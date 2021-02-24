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
  public user = new User("","","","","","",0)
  constructor(private http : HttpClient) { }
  addUser(){
    this.http.post("https://hidden-coast-23643.herokuapp.com/utilisateurs",this.user).subscribe();
  }
  ngOnInit(): void {
  }

}
