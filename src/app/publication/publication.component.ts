import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Publication} from '../publication'
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  public publications : any=[];
  public currentUser : any;
  public connected : string;
  public publication = new Publication("","","","","") ;
  constructor(private http : HttpClient) { }
  deletePub(pubId : any){
    this.http.delete('http://127.0.0.1:8000/api/publications/'+pubId)
    .subscribe(
        ()=>this.http.get('http://127.0.0.1:8000/api/publications')
        .subscribe(res=> this.publications=res) 
    );
  }
  addPub(pubText: string){
    let today = new Date().toISOString().slice(0, 10);
    this.publication.date=today;
    console.log("pub body",this.publication)
    this.http.post("http://127.0.0.1:8000/api/publications",this.publication).subscribe(res => {
      this.http.get('http://127.0.0.1:8000/api/publications')
        .subscribe(res=> this.publications=res) 
    });

  }

  handleInscription(id){
    console.log("id",id);
  }

  ngOnInit(): void {
    this.connected=localStorage.getItem("connected");
    if(this.connected=="true")
    {
      this.currentUser = JSON.parse(localStorage.getItem("user"));
      console.log("current",this.currentUser);
      this.publication = new Publication(this.currentUser.id,"whatever","","",this.currentUser.matiere) ;
    }
    this.http.get('http://127.0.0.1:8000/api/publications').subscribe(res => this.publications=res)
    setTimeout(()=>{
      console.log(this.publications)

    },2000);
  }


}
