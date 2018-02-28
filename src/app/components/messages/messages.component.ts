import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../../services/identification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
message1:any;
tousMessages:any;
  constructor(public ident: IdentificationService, private http:HttpClient) { }

  ngOnInit() {
    this.tousMessages=this.ident.identifiantsComplets.messages;
    //console.log(this.tousMessages)
    this.tousMessages=this.tousMessages.reverse();
  }
  
  createMessage(input: HTMLInputElement) {
    this.message1 =  input.value;
    console.log('message1',this.message1);
   input.value='';

   this.http.post('http://localhost:1337/datamessage',{
     message: this.message1,     
     firstnameSender: this.ident.identifiantsComplets.firstname,
      lastnameSender: this.ident.identifiantsComplets.lastname,
      usernameRecever: this.ident.profileDetailsMessage.username,
      passwordRecever: this.ident.profileDetailsMessage.password
     }).subscribe(response =>{
     console.log(response);
     

   })
  }

}
