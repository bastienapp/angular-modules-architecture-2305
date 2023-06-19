import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { LoadPostComponent } from './components/feature/load-post/load-post.component';
import { ShowPostListComponent } from './components/ui/show-post-list/show-post-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    LoadPostComponent,
    ShowPostListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class ArticleModule { }
