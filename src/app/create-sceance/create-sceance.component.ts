import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {SceanceInfo} from '../sceance-info'
@Component({
  selector: 'app-create-sceance',
  templateUrl: './create-sceance.component.html',
  styleUrls: ['./create-sceance.component.css']
})
export class CreateSceanceComponent implements OnInit {
  public sceance =  new SceanceInfo("","","","","",1)
  public currentUser: any;
  constructor(public http:HttpClient) { }

  addSceance(){
    console.log("sceance",this.sceance)
    const req = {
      ...this.sceance,
      idEnseignant : JSON.parse(localStorage.getItem('user')).id
    }
    console.log("req",req)
    this.http.post("http://127.0.0.1:8000/api/sceances/",req).subscribe(res=> alert('sceance cree'))
  }

  ngOnInit(): void {
    
  }

}
