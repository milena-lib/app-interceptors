import { Component, OnInit } from '@angular/core';
import { IPosts } from 'src/app/interfaces/i-posts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  title = 'Interceptors App';
  posts: IPosts[];

  constructor(private apiService: ApiService) {
    this.posts = [];
  }

  getData(): void {
    this.apiService.getData1().subscribe(data => {
      this.posts = data;
      debugger;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

}
