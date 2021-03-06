
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IdentificationService } from '../../services/identification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

database: any;
photoDatabase:any;

  constructor(private http: Http, public ident: IdentificationService) {

    this.http.get('http://localhost:1337/friends',{

    }).subscribe(response =>{
      console.log('good');
     
      this.database= response.json(); 
      console.log('database',typeof this.database);
      console.log('database',this.database);
      this.photoDatabase=this.database.photos;
      

    }, 
    error => { console.log('error occured');

   
  });

    
  }

  ngOnInit() {
  }

  suppressionCompte(ami){
    //this.courses = this.courses.filter((value, index) => course != index);
    
    for(let i=0;i<this.database.length; i++){
        if(i==ami){
           // this.courses.splice(i,1);
           const req = this.http.post('http://localhost:1337/admin',{
            username: this.database[ami].username,
            password: this.database[ami].password,
       
            }).subscribe(req =>{
              console.log('good');
             // console.log(req);  
              
              this.http.get('http://localhost:1337/friends',{
              }).subscribe(response =>{
                console.log('good'); 
                this.database= response.json(); 
              //  console.log('database',typeof this.database);
              //  console.log('database',this.database);
                this.photoDatabase=this.database.photos;
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