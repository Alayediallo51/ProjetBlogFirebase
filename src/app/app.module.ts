import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {PostListComponent} from './postlist/postlist.component';
import {PostListItemComponent} from './postlistitem/postlistitem.component';
import {BlogServiceService} from './shared/services/blog-service.service';
import { NewComponent } from './new/new.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
    {path: 'new', component: NewComponent},
    {path: 'posts', component: PostListComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '**', redirectTo: 'posts'}
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent,
        NewComponent,
        ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        BlogServiceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
