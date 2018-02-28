import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'selenium-webdriver';
import { IdentificationService } from '../../services/identification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient, private id: IdentificationService, private rout: Router) {


  }



  ngOnInit() {
   
  }

  submit(form) {
    
    console.log(form.value);
    console.log(form.value.username);
    console.log(form.value.password);

    const req = this.http.post('http://localhost:1337/registration',{
      username: form.value.username,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      password: form.value.password,
      photo: form.value.photo,
      
      }).subscribe(req =>{
        console.log('good');

      

        this.rout.navigateByUrl("connexion", { skipLocationChange: true })
        /*
        this.http1
        .get('http://localhost:1337/data')
        .subscribe(response => {
        this.id.identifiants = response.json();
        });
          console.log(this.id.identifiants);*/
         
      }, 
      error => { console.log('error occured');
    });
  }
}
