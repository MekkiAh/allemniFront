import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'allemni';
  public connected = "false";
  public currentUser ;
  deconnecter(){
    localStorage.setItem('connected','false')
    window.location.href="/login"
  }
  ngOnInit(){
      this.connected =localStorage.getItem("connected");
      this.currentUser = JSON.parse(localStorage.getItem('user'))
      console.log("user",this.currentUser)

      //  if(this.connected=="true")this.currentUser= JSON.parse(localStorage.getItem("user"));

  }
}
