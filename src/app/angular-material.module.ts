import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


const modules: any[] = [
  MatSlideToggleModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule

]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports:[...modules]
})
export class AngularMaterialModule { }
