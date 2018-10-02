import {Component, Input, OnInit} from '@angular/core';

import {Post} from '../shared/model/post.model';
import {BlogServiceService} from "../shared/services/blog-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-postlistitem',
    templateUrl: './postlistitem.component.html',
    styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() post: Post;
    @Input() index: number;

    ngOnInit() {
    }

    constructor(
        private blogService: BlogServiceService
    ){

    }

    isLoved() {
        return this.post.loveIts - this.post.dontLoveIts > 0;
    }

    isHated() {
        return this.post.loveIts - this.post.dontLoveIts < 0;
    }

    loveIt() {
        this.post.loveIts++;
    }

    dontLoveIt() {
        this.post.dontLoveIts++;
    }

    resetLoves() {
        this.post.loveIts = 0;
        this.post.dontLoveIts = 0;
    }

    deletePost(index){
        this.blogService.deletePost(index);
    }
}
