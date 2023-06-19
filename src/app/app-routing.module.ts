import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/user/pages/login/login.component';
import { PostListComponent } from './modules/article/pages/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'user/login', component: LoginComponent
  },
  {
    path: 'article/posts', component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
