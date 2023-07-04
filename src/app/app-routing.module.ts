import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';

const routes: Routes = [

  {
    path:'home',
    component:MainPageComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {path:'**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
