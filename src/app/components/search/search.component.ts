import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IdentificationService } from '../../services/identification.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

  ajoutAmi(ami){
    //this.courses = this.courses.filter((value, index) => course != index);
    
    for(let i=0;i<this.database.length; i++){
        if(i==ami){
           // this.courses.splice(i,1);
           const req = this.http.post('http://localhost:1337/addfriend',{
            username: this.ident.identifiants.username,
            password: this.ident.identifiants.password,
            identite:this.database[ami]
            }).subscribe(req =>{
              console.log('good');
              console.log(req);    
            }, 
            error => { console.log('error occured');
      
           
           });

          const req2 = this.http.post('http://localhost:1337/addfriend',{
            username: this.database[ami].username,
            password: this.database[ami].password,

            identite:this.ident.identifiantsComplets
            }).subscribe(req2 =>{
              console.log('good');
              console.log(req2);
            }, 
            error => { console.log('error occured');
      
           
          });

        }
    }   
}
}


