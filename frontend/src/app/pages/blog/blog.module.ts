import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostsHeroComponent } from './posts-hero/posts-hero.component';

const routes: Routes = [
  { path: '', component: BlogComponent, pathMatch: 'full' },
  { path: 'post', component: BlogPostComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class BlogModule { }
