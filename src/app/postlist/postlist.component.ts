import {Component, OnInit} from '@angular/core';

import {Post} from '../shared/model/post.model';
import {BlogServiceService} from "../shared/services/blog-service.service";

@Component({
    selector: 'app-postlist',
    templateUrl: './postlist.component.html',
    styleUrls: ['./postlist.component.scss']
})
export class PostListComponent implements OnInit {
    posts: Post[];
    ngOnInit() {
        this.blogService.getPosts();
        this.blogService.Posts.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        )

    }
    constructor(
        private blogService: BlogServiceService
    ){

    }

}
