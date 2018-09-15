import { PostService } from './../post.service';
import { Http } from '@angular/http';
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
    this.postService.getPosts().subscribe(response => {
      // console.log(response.json());
      this.posts = response.json();
    });
  }

  createPost(titleInput: HTMLInputElement) {
    const post = { title: titleInput.value };
    this.postService.createPosts(post).subscribe(response => {
      console.log('added new post : ', response.json());
      // console.log(response.json());
      // this.posts[this.currentIndex++] = response.json();
    });
  }

  deletePost(post) {
    this.postService.deletePosts(post).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log('deleted post : ');
      console.log(post);
    });
  }
}
