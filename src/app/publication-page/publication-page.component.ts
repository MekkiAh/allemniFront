import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-publication-page',
  templateUrl: './publication-page.component.html',
  styleUrls: ['./publication-page.component.css']
})
export class PublicationPageComponent implements OnInit {
  public id : any ;
  public publicationDetails : any ;
  public buttonPressed : any ;
  public userSubscriptions : Array<any>;
  public currentUser : any;
  public rating : any ;
  public sceanceInscriptions : Array<number>;
  constructor(public route: ActivatedRoute, private http : HttpClient , private router: Router) { }

  submitRate(rate){
    this.http.post("http://127.0.0.1:8000/api/avis",{
      idEtudiant: this.currentUser.id,
      idEnseignant : this.publicationDetails.id,
      rate
    }).subscribe(res=> alert(`avis enregistre ${rate}`))
  }

  checkSubscribed(sceanceId){
    console.log("start")
    let result = false
    this.userSubscriptions.forEach(subscription => {
      if(subscription.idSceance == sceanceId){
        console.log("found it ")
        result=true;
     
      }})
      return result;
  
  }

  handleInscription(userId,sceanceId){
    const req={
      idEtudiant : userId,
      idSceance :sceanceId,
      date: Date.now()
    }

    this.http.post("http://127.0.0.1:8000/api/inscriptions/",req)
      .subscribe(res=>{
        this.buttonPressed=true
      })


  }

  handleDesinscription(userId,SceanceId){
    this.buttonPressed=false
  }

  ngOnInit(): void {
    this.buttonPressed=false
    this.currentUser=JSON.parse(localStorage.getItem('user'));
    if(localStorage.getItem('connected')=="false")
    {
      window.location.href="/login";

    }
    this.route.params.subscribe((params: any) => {this.id = params.id;  });
    this.http.get("http://127.0.0.1:8000/api/utilisateurs/"+this.id)
    .subscribe((res1:Array<any>)=> {
    
        this.http.get("http://127.0.0.1:8000/api/sceances/1")
          .subscribe((res2: Array<any>) =>{
            let resultat = []
            const newsceance = res2.filter(sceance => sceance.idEnseignant == res1[0].id);
            newsceance.forEach(sceance => {
             
              resultat.push(sceance.sceance_inscription.length)});

              this.sceanceInscriptions = resultat;
      
          });
          let somme = 0
          if(res1[this.id-1].enseignant_avis.length!==0){
            res1[this.id-1].enseignant_avis.forEach(avis=> somme = somme + parseInt(avis.rate))
            this.rating = somme/res1[this.id-1].enseignant_avis.length
          }else{
            this.rating = 0
          }
         
        this.publicationDetails=res1[this.id-1];

    });
    console.log("id",JSON.parse(localStorage.getItem('user')).id)
    const id = JSON.parse(localStorage.getItem('user')).id
    this.http.post("http://127.0.0.1:8000/api/user-inscriptions/",{id})
      .subscribe((res: any) => {
        console.log("inscriptions",res);
        this.userSubscriptions = res;
      })
    

    }

}
