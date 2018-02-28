import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../../services/identification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  amisUsers:any;
  profileDetails: any;
  lesAmisDeLami: any;
  //recuperer les donnée ami temporairement
  req2temporaire: any;
  comment1:any;
  allCommentairesAmis: any;

  
  constructor(public ident: IdentificationService, private http: HttpClient, private rout: Router ) { }

  ngOnInit() {
    this.profileDetails=this.ident.amiSelectionne;
   // console.log('profiledetailsoninit',this.profileDetails)
    this.lesAmisDeLami=this.profileDetails.friends;
 //   console.log('lesAmisDeLamioninit',this.lesAmisDeLami)
    this.amisUsers=this.ident.amis;
  }

  switchFriend(poto){
    for(let i=0;i<this.amisUsers.length; i++){
      if(i==poto){
        this.profileDetails=this.amisUsers[poto];
      
       // console.log('profiledetailsclic',this.profileDetails)
       // console.log('lesAmisDeLamiclic',this.lesAmisDeLami)

        const req2 = this.http.post('http://localhost:1337/data',{
          username: this.profileDetails.username,
          password: this.profileDetails.password,

          
          }).subscribe(req2 =>{
            console.log('good');
            console.log('req2',req2);
            this.req2temporaire=req2;
            this.lesAmisDeLami=this.req2temporaire.friends;
            this.allCommentairesAmis=this.req2temporaire.comments;
            this.allCommentairesAmis=this.allCommentairesAmis.reverse();
          }, 
          error => { console.log('error occured');
    
         
        });
      }
  
    }
  }

  createComment(input: HTMLInputElement) {
    this.comment1 =  input.value;
    console.log('comment1',this.comment1);
   input.value='';

   this.http.post('http://localhost:1337/datacomment',{
     commentaire: this.comment1,     
     username: this.profileDetails.username,
      password: this.profileDetails.password,
      commentFirstname: this.ident.identifiantsComplets.firstname,
      commentLastname: this.ident.identifiantsComplets.lastname
     }).subscribe(response =>{
     console.log(response);
     //post=response.json();
    // this.posts.splice(0,0,post)
       
     const req = this.http.post('http://localhost:1337/data',{
       username: this.profileDetails.username,
       password: this.profileDetails.password
       }).subscribe(req =>{
         console.log('good');
     
         this.ident.commentairesAmis=req;
         console.log("commentaireamis",this.ident.commentairesAmis);
        
         this.allCommentairesAmis=this.ident.commentairesAmis.comments;

        this.allCommentairesAmis=this.allCommentairesAmis.reverse();
       }, 
     error => { console.log('error occured');
     });

   })
 }

 sendMessage(profileDetails){
  this.rout.navigateByUrl("messages", { skipLocationChange: true })
  console.log(profileDetails);
  this.ident.profileDetailsMessage=profileDetails;
 }
}
