import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allemni';
  public connected = localStorage.getItem('connected');
  //public currentUser=JSON.parse(localStorage.getItem('user'));
}
