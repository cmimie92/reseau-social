import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../../services/identification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public id: IdentificationService) { }

  ngOnInit() {
  }

}
