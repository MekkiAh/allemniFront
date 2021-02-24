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
  constructor(public route: ActivatedRoute, private http : HttpClient , private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('connected')=="false")
    {
      this.router.navigate(['/login']);

    }
    this.route.params.subscribe((params: any) => {this.id = params.id;  });
    this.http.get("https://hidden-coast-23643.herokuapp.com/api/utilisateurs/"+this.id)
    .subscribe(res=> this.publicationDetails=res);
    
 
    }
}
