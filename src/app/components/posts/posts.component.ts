import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdentificationService } from '../../services/identification.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {
  posts: any [];
  post1: any;

  constructor(private http:HttpClient, public ident: IdentificationService) { 
  

  }

  ngOnInit() {

    
    const req = this.http.post('http://localhost:1337/data',{
      username: this.ident.identifiants.username,
      password: this.ident.identifiants.password
      }).subscribe(req =>{
        console.log('good');
       
    
    this.ident.proprietes=req;
    console.log("ident",this.ident.identifiants);
    console.log("propriete", this.ident.proprietes);
       this.posts=this.ident.proprietes.post;
        this.posts=this.posts.reverse();
      }, 
      error => { console.log('error occured');

     
    });

  }




  createPost(input: HTMLInputElement) {
     this.post1 =  input.value;
     console.log('post1',this.post1);
    input.value='';

    this.http.post('http://localhost:1337/datapost',{
      comment: this.post1,     
      username: this.ident.identifiants.username,
       password: this.ident.identifiants.password
      }).subscribe(response =>{
      console.log(response);
      //post=response.json();
     // this.posts.splice(0,0,post)
        
      const req = this.http.post('http://localhost:1337/data',{
        username: this.ident.identifiants.username,
        password: this.ident.identifiants.password
        }).subscribe(req =>{
          console.log('good');
      
          this.ident.proprietes=req;
          console.log("ident",this.ident.identifiants);
          console.log("propriete", this.ident.proprietes);
          this.posts=this.ident.proprietes.post;

         this.posts=this.posts.reverse();
        }, 
      error => { console.log('error occured');
      });

    })
  }

}
