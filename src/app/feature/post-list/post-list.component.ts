import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PostService } from 'src/app/core/services/post/post.service';
import { PostResponse } from 'src/app/core/types/post/post.type';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  posts$: Observable<PostResponse>  =  new Subject();

  constructor (private postService: PostService){

  }
  ngOnInit(): void {
    this.init();
  }

  init():void{
    this.posts$ = this.postService.getAllPostsToComponent();
  }

  openPost(id:number){
    console.log(id);
  }

}
