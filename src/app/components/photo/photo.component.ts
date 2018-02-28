import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdentificationService } from '../../services/identification.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  picture: any;
  imageUrl:string;
  changePicture:string;

  constructor(private http:HttpClient,  public ident: IdentificationService) { }

  ngOnInit() {

    
    const req = this.http.post('http://localhost:1337/data',{
      username: this.ident.identifiants.username,
      password: this.ident.identifiants.password,
      //image: this.picture
   
      }).subscribe(req =>{
        console.log('good');
       
    
    this.picture= req;
    this.imageUrl=this.picture.photos;
    console.log('pic',this.picture)
      }, 
      error => { console.log('error occured');

     
    });

  }


  

  uploadPhoto(input: HTMLInputElement) {
     this.changePicture =  input.value;
     console.log('changePicture',this.changePicture);
    input.value='';

    this.http.post('http://localhost:1337/changeimage',{
      newPhoto: this.changePicture,     
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
      
          this.ident.newImage=req;
          console.log("newImage",this.ident.newImage);
         
        this.imageUrl=this.ident.newImage.photos;
        }, 
      error => { console.log('error occured');
      });

    })
  }
}
