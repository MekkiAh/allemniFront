import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public profs : any = [] ;
  constructor(private http : HttpClient, private router:Router) { }
  acceptProf(prof:any){
    prof.validated= true
    this.http.put("https://hidden-coast-23643.herokuapp.com/api/utilisateurs/"+prof.id,prof)
    .subscribe();
  }
  refuseProf(prof:any){
    this.http.delete("https://hidden-coast-23643.herokuapp.com/api/utilisateurs/"+prof.id)
    .subscribe(()=>this.getProfs());
  }
  getProfs(){
    this.http.get("https://hidden-coast-23643.herokuapp.com/api/utilisateurs")
    .subscribe(res=>this.profs=res);

  }
  ngOnInit(): void {
    if(localStorage.getItem('connected')=="false")
    {
      this.router.navigate(['/login']);
    }
    else{
      if(JSON.parse(localStorage.getItem('user')).role!="ENSEIGNANT")
      {
        this.router.navigate(['/login']);
  
      }
    }

    this.getProfs();
  }

}
