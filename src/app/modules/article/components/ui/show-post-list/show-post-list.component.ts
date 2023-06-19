import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-show-post-list',
  templateUrl: './show-post-list.component.html',
  styles: [
  ]
})
export class ShowPostListComponent {

  @Input()
  allPosts: Post[] = []
}
