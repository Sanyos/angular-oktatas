import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './feature/posts/posts.component';
import { PostComponent } from './feature/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { TruncatePipe } from './core/pipes/truncate/truncate.pipe';
import { TagLimitPipe } from './core/pipes/tag-limit/tag-limit.pipe';
import { AuthModule } from './feature/auth/auth.module';
import { PostListComponent } from './feature/post-list/post-list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    TruncatePipe,
    TagLimitPipe,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    AuthModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
