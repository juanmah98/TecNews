import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NewHomeComponent } from './new-home/new-home.component';



@NgModule({
  declarations: [
    HomeComponent,
    NoticiaComponent,
    NewHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   HomeComponent,
   NewHomeComponent
  ]
})
export class RoutesModule { }
