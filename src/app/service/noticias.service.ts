import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NoticiasAPI } from 'src/interfaces/noticiasAPI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  appKey: string = 'f0b1b31a4990475c9ac5629cbccd3110';
  baseURL: string ='https://newsapi.org/v2';
  country: string = 'ar';
 // https://newsapi.org/v2/top-headlines?country=us&apiKey=f0b1b31a4990475c9ac5629cbccd3110
  constructor(private http: HttpClient) { }

  getNews(): Observable<NoticiasAPI>{

    
    let params = new HttpParams().set('apiKey', this.appKey);   
    return this.http.get<NoticiasAPI>(this.baseURL + '/top-headlines?country=' + this.country , {params: params})    
  }
}
