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
  public publication = new Publication("","","","") ;
  constructor(private http : HttpClient) { }
  deletePub(pubId : any){
    this.http.delete('https://hidden-coast-23643.herokuapp.com/api/publications/'+pubId)
    .subscribe(
        ()=>this.http.get('https://hidden-coast-23643.herokuapp.com/api/publications')
        .subscribe(res=> this.publications=res) 
    );
  }
  addPub(pubText: string){
    let today = new Date().toISOString().slice(0, 10);
    this.publication.date=today;
    this.http.post("https://hidden-coast-23643.herokuapp.com/api/publications",this.publication).subscribe();

  }
  ngOnInit(): void {
    this.connected=localStorage.getItem("connected");
    if(this.connected=="true")
    {
      this.currentUser = JSON.parse(localStorage.getItem("user"));
      this.publication = new Publication("3","","","") ;
    }
    this.http.get('https://hidden-coast-23643.herokuapp.com/api/publications').subscribe(res => this.publications=res)
    setTimeout(()=>{
      console.log(this.publications)

    },2000);
  }


}
