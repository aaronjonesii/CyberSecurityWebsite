import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../shared/utils/blog/blog.service';
import { Location } from '@angular/common';
import { Blog } from '../../../shared/utils/blog/blog';

@Component({
  selector: 'anon-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.scss']
})
export class EditBlogPostComponent implements OnInit {
  @Input() post: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
  ) { }

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
