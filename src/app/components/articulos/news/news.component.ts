import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/service/noticias.service';
import { Article, NoticiasAPI } from 'src/interfaces/noticiasAPI';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']  
  
})
export class NewsComponent implements OnInit {
  news: Article[] = [];
  constructor(private _NoticiasService : NoticiasService) { } 

  ngOnInit(): void {
    this.getNoticias();
    console.log('estamos en el componente news');
  }

  getNoticias(){
    this._NoticiasService.getNews().subscribe({
      next: (data: NoticiasAPI) => {
        console.log(data);
        this.news=data.articles;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('La peticion termino')
      }
      
    })
  }

}
