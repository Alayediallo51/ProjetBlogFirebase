import {Injectable, OnInit} from '@angular/core';
import {Post} from  '../model/post.model';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class BlogServiceService implements OnInit {
    posts = [
        new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus vel metus id pretium. Donec posuere ante quis'),
        new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus vel metus id pretium. Donec posuere ante quis'),
        new Post('Mon troisième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus vel metus id pretium. Donec posuere ante quis')
    ];

    public Posts: BehaviorSubject<Post[]> = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
        private router: Router
        ) {
    }

    ngOnInit(){
    }

    getPosts(): void {
        this.http.get('https://blogocc-52085.firebaseio.com/posts.json').subscribe(
            (values: Post[]) => {
                this.Posts.next(values);
            }
        );
    }

    setPost(post: Post[]): void{
        this.http.put('https://blogocc-52085.firebaseio.com/posts.json', JSON.stringify(post)).subscribe(
            suc => {
                console.log('ok');
                this.router.navigate(['posts']);
            }
        );
    }

    deletePost(index: number): void{
        const ListesValuesPost: any[] = this.Posts.getValue();
        ListesValuesPost.splice(index, 1);
        this.http.put('https://blogocc-52085.firebaseio.com/posts.json', JSON.stringify(ListesValuesPost)).subscribe(
                    success => {
                        console.log('ok');
                    }
        );
    }
}
