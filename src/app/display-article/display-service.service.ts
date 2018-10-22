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
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token '+localStorage.getItem('Token')
    })
  };
  constructor(private http: HttpClient) { }
  getArticleDetails(slug){
    return this.http.get(`${this.url}articles/${slug}`);
  }
  postComment(comment,slug){
    
  return this.http.post(`${this.url}articles/${slug}/comments`,JSON.stringify(comment),this.httpOptions);    
  }
  getAllComments(slug){
   
    return this.http.get(`${this.url}articles/${slug}/comments`); 
  }
  removeComment(id,slug){
    
    return this.http.delete(`${this.url}articles/${slug}/comments/${id}`,this.httpOptions);  
  }
  removeArticle(slug){
   return this.http.delete(`${this.url}articles/${slug}`,this.httpOptions); 
  }
  follow(user){
    return this.http.post(`${this.url}profiles/${user.article.author.username}/follow`,JSON.stringify(user),this.httpOptions);  
  }
  favorite(slug){
    
    return this.http.post(`${this.url}articles/${slug}/favorite`,JSON.stringify(slug),this.httpOptions);

  }

  Unfollow(user){
    return this.http.delete(`${this.url}profiles/${user.article.author.username}/follow`,this.httpOptions); 
  }
  Unfavorite(slug){
     return this.http.delete(`${this.url}articles/${slug}/favorite`,this.httpOptions);
  }

}
