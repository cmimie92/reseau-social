import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-listeamis',
  templateUrl: './listeamis.component.html',
  styleUrls: ['./listeamis.component.css']
})
export class ListeamisComponent implements OnInit {
  amis: any[];

  constructor(http: Http) {
    http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(response => {
        this.amis = response.json();
      });
  }

  ngOnInit() {}
}
