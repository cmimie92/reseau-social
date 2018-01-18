import {FollowersService} from '../../services/Followers.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {
  followers: any[];
  nombre;

  constructor(private service: FollowersService) {}

}


