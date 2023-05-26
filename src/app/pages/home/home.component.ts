import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{


  featuredPostsArray:any = [];
  latestPostArray:any = [];

  constructor( private postService: PostsService){

    this.postService.loadFeatured().subscribe(val=>{
      this.featuredPostsArray = val;
    })

    this.postService.loadLatest().subscribe(val =>{
      this.latestPostArray = val;
    })

  }

  ngOnInit(): void {
      
  }

}
