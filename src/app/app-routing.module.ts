import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathermapComponent } from './feature/weathermap/weathermap.component';

const routes: Routes = [
  {path:'weather', component:WeathermapComponent},
  {path:'',redirectTo:'/weather', pathMatch:'full' },
  {path:'**', redirectTo:'/weather'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
