import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-load-post',
  templateUrl: './load-post.component.html',
  styles: [
  ]
})
export class LoadPostComponent implements OnInit {

  postList: Post[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.postService.findAll()
      .subscribe((postList: Post[]) => this.postList = postList)
  }


}
