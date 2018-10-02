import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlogServiceService} from "../shared/services/blog-service.service";
import {Post} from "../shared/model/post.model";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  blogForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private blogService: BlogServiceService

  ) { }

    listesPosts: any[] = [];
    ngOnInit() {
        this.blogService.Posts.subscribe(
            values => {
                if(values){
                    this.listesPosts = values;
                }
            }
        );
        this.initForm();
    }
    initForm() {
        this.blogForm = this.formBuilder.group({
                title : ['', Validators.required],
                comments: ['', Validators.required]
            }
        );
    }
    onSaveBlog() {
        const Blog: Post = new Post(this.blogForm.value.title ,this.blogForm.value.comments);
        this.listesPosts.push(Blog);
        this.blogService.setPost(this.listesPosts);
    }
}
