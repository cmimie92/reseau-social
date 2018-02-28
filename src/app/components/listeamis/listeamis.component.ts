import {Component, OnInit} from '@angular/core';
import { IdentificationService } from '../../services/identification.service';
import { ProfileComponent } from '../profile/profile.component';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listeamis',
  templateUrl: './listeamis.component.html',
  styleUrls: ['./listeamis.component.css']
})
export class ListeamisComponent implements OnInit {
  listeAmis :any;
 


  constructor(public ident: IdentificationService,private rout: Router , private http: HttpClient) {
  }

  ngOnInit() 
  
  {
    const req = this.http.post('http://localhost:1337/data',{
      username: this.ident.identifiants.username,
      password: this.ident.identifiants.password
      }).subscribe(req =>{
        console.log('good');
    
      this.ident.proprietes=req;
     // console.log("identliste",this.ident.identifiants);
      //console.log("proprieteliste", this.ident.proprietes);
      this.ident.amis=this.ident.proprietes.friends;
     // console.log(this.ident.amis);
      this.listeAmis=this.ident.amis;

      }, 
      error => { console.log('error occured');

     
    });


    }
    deleteFriends(ami){
      for(let i=0;i<this.ident.amis.length; i++){
        if(i==ami){
           // this.courses.splice(i,1);
           const req = this.http.post('http://localhost:1337/deletefriend',{
            username: this.ident.identifiants.username,
            password: this.ident.identifiants.password,
            nombre:this.ident.amis[ami]
            }).subscribe(req =>{
              console.log('good');
             // console.log(req);
             // console.log("ami", this.ident.amis[ami]);

              // on retourne en base de donnée pour la mise a jour
              const req1 = this.http.post('http://localhost:1337/data',{
                username: this.ident.identifiants.username,
                password: this.ident.identifiants.password
                }).subscribe(req1 =>{
                  console.log('good');
              
                this.ident.proprietes=req1;
                this.ident.amis=this.ident.proprietes.friends;
                this.listeAmis=this.ident.amis;
          
                }, 
                error => { console.log('error occured');
          
               
                });

          
              }, 
            error => { console.log('error occured');
      
           
          });

          const req2 = this.http.post('http://localhost:1337/deletefriend',{
            username: this.ident.amis[ami].username,
            password: this.ident.amis[ami].password,
            nombre:this.ident.identifiantsComplets
            }).subscribe(req2 =>{
              console.log('good');
             // console.log(req);
             // console.log("ami", this.ident.amis[ami]);

          
              }, 
            error => { console.log('error occured');
      
           
             });

        }
      }
    }
    
    visiteProfile(ami){
      this.rout.navigateByUrl("friends", { skipLocationChange: true })
      for(let i=0;i<this.ident.amis.length; i++){
        if(i==ami){
          this.ident.amiSelectionne=this.ident.amis[ami];
          console.log("amiselectionne",this.ident.amiSelectionne);
        }
      }
    } 
}
