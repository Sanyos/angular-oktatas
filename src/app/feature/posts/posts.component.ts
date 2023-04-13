import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post/post.service';
import { Post, PostResponse } from 'src/app/core/types/post/post.type';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  dataSource: MatTableDataSource<any> = new MatTableDataSource();

 @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
 @ViewChild(MatSort) sort: MatSort =  new MatSort();

  loading:boolean = false;
  posts: Post[] = [];
  errorMsg:string = '';
  displayedColumns: string[] = ['id', 'title', 'body', 'tags'];
  constructor( private postService: PostService, private router: Router){
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {
    this.init();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  private init(){
    //API

    this.loading =true;
    this.postService.getAllPostsToComponent().subscribe({
      next: (response: PostResponse)=>{
          this.posts = response.posts
          this.dataSource = new MatTableDataSource(this.posts)
          console.log(this.dataSource);
          this.loading = false;
      },
      error: (err)=>{
        console.log(err);
        this.loading = false;
        this.errorMsg = err
      }
    })

   // this.postService.getAllPosts();
    //SUBS
    /*this.postService.posts$.subscribe((posts:Post[] | null)=>{
      if(posts !== null){
        this.loading = false;
        this.posts = posts;
      }else{
       this.loading = true;
      }
    });*/
  }


  editPost(post:Post){
    this.router.navigate(['post',post.id]);
  }

}
