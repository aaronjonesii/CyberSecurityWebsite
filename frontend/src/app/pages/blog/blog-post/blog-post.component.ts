import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../shared/utils/blog/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../shared/utils/blog/blog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'anon-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() post: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(id)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

}
