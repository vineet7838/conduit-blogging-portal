import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {
  url: string='https://conduit.productionready.io/api/';
  user:Object;
  constructor(private http: HttpClient) { }
  getArticleDetails(slug){
    var a= this.http.get(`${this.url}articles/${slug}`);
    return a;
  }
  postComment(comment,slug){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
     var a= this.http.post(`${this.url}articles/${slug}/comments`,JSON.stringify(comment),httpOptions);
    return a;    
  }
  getAllComments(slug){
    var a= this.http.get(`${this.url}articles/${slug}/comments`);
    return a;    
  }
  removeComment(id,slug){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    var a= this.http.delete(`${this.url}articles/${slug}/comments/${id}`,httpOptions);
    return a;  
  }
  removeArticle(slug){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    var a= this.http.delete(`${this.url}articles/${slug}`,httpOptions);
    return a;  
  }
}
