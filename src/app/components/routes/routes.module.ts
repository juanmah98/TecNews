import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';



@NgModule({
  declarations: [
    HomeComponent,
    NoticiaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
