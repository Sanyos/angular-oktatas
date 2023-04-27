import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/services/guards/auth-guard/auth-guard.service';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { PostComponent } from './feature/post/post.component';
import { PostsComponent } from './feature/posts/posts.component';
import { PostListComponent } from './feature/post-list/post-list.component';
import { guard } from './core/services/guards/test';

const routes: Routes = [

  {
    path: 'home',
    title:'Főképernyő',
    component: HomeComponent
  },
  {
    path:'auth',
    loadChildren:() => import('./feature/auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path:'posts',
    title:'Postok!!!!!',
    component:PostsComponent,
    canActivate: [guard]
  },
  {
    path:'post-list',
    component:PostListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'post/:id',
    component:PostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
