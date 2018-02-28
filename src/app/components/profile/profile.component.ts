import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../../services/identification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  commentsUserEnCours :any;
  //mise a jour des commentaires apres suppresssion
  commentsUserEnCoursUpdates :any;


  constructor(public id: IdentificationService, private http: HttpClient) { }

  ngOnInit() {

   
    
    const req = this.http.post('http://localhost:1337/data',{
      username: this.id.identifiants.username,
      password: this.id.identifiants.password
      }).subscribe(req =>{
        console.log('good');
    
    this.id.proprietes=req;
    console.log("ident",this.id.identifiants);
    console.log("propriete", this.id.proprietes);
    this.commentsUserEnCours=this.id.proprietes.comments;
    this.commentsUserEnCours=this.commentsUserEnCours.reverse();
       
      }, 
      error => { console.log('error occured');

     
    });
      

  }

  deleteComment(comment){

    for(let i=0;i<this.commentsUserEnCours.length; i++){
      if(i==comment){
         // this.courses.splice(i,1);
         const req = this.http.post('http://localhost:1337/deletecomment',{
          username: this.id.identifiants.username,
          password: this.id.identifiants.password,
          theComment:this.commentsUserEnCours[comment]
          }).subscribe(req =>{
            console.log('good');
    
            
            // on retourne en base de donnée pour la mise a jour
            const req1 = this.http.post('http://localhost:1337/data',{
              username: this.id.identifiants.username,
              password: this.id.identifiants.password
              }).subscribe(req1 =>{
                console.log('good');
            
                this.commentsUserEnCoursUpdates=req1;
                this.commentsUserEnCours=this.commentsUserEnCoursUpdates.comments;
        
              }, 
              error => { console.log('error occured');
        
             
              });

        
            }, 
          error => { console.log('error occured');
    
         
        });
      
      }

    }
  }  
}