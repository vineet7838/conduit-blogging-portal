import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
url: string='https://conduit.productionready.io/api/';
user:Object;
constructor(private http: HttpClient) { 

  }
 
  // getUserData(data){
  //   console.log(data);
  // }
  authUser(user){
   // console.log(user);
    console.log(JSON.stringify({user}));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    
    console.log(this.http.post(`${this.url}users/login`,JSON.stringify({user})));
    return this.http.post(`${this.url}users/login`,JSON.stringify({user}),httpOptions);
    
  }
}
