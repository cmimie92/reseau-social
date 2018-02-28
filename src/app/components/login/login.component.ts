import {UsernameValidators} from './username.validators';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { IdentificationService } from '../../services/identification.service';
import {NgModule} from '@angular/core';

@Component({
 selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private http: HttpClient, private rout: Router,public id: IdentificationService) {


  }
/*
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3), 
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl('', Validators.required)
  });*/

  ngOnInit() {


  }

  submit(f) {
    
    console.log('fvalue', f.value);



    const req = this.http.post('http://localhost:1337/connexion',{
      username: f.value.username,
      password: f.value.password
      }).subscribe(req =>{
        console.log('good');
        this.id.toto = true;
      


        this.id.identifiantsComplets=req;
        this.id.identifiants=f.value;

        if(f.value.username==this.id.passwordAdmin && f.value.password==this.id.userAdmin){
          this.id.tutu=true;
        }
        //console.log("ident", this.id.identifiants );
        console.log("identComplet", this.id.identifiantsComplets );
        this.rout.navigateByUrl("profile", { skipLocationChange: true })
      }, 
      error => { console.log('error occured');
      this.id.toto= false;
     // console.log(this.toto);
     
    });
  }
}
