import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  posts: any[];
  currentIndex = 0;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(response => {
      // console.log(response.json());
      this.posts = response.json();
    });
  }

  createPost(titleInput: HTMLInputElement) {
    const post = { title: titleInput.value };
    this.postService.create(post).subscribe(
      response => {
        console.log('added new post : ', response.json());
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      error => {
        alert('Error occured, please reload the page!');
        console.log('Unexpected error: ', error);
      }
    );
  }

  deletePost(post) {
    this.postService.delete(post).subscribe(
      response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log('deleted post : ');
        console.log(post);
      },
      error => {
        alert('Error occured, please reload the page!');
        console.log('Unexpected error: ', error);
      }
    );
  }
}
