import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private http: Http) {
    http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  ngOnInit() {}

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }
}
