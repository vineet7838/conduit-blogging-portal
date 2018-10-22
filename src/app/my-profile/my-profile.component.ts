import { Component, OnInit } from '@angular/core';
import { MyProfileService } from './my-profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private getData: MyProfileService, private route: Router,private router: ActivatedRoute) { }
  public user: Object;
  public username: string;
  public articles: Array<object>;
  limit: Number = 10;
  public token: string;
  public following:boolean;
  public userUserName:string;
  public userToken:string;
  match:boolean;
  
articleCount:Number
itemPages:any
  
  ngOnInit() {

    this.router.paramMap.subscribe(params => {
      this.username = params.get("username");
      this.userUserName=localStorage.getItem('username');
      console.log(this.userToken);
      this.userToken=localStorage.getItem('Token');
      this.match=false;
      if(this.userToken){
        if(this.userUserName===this.username){
          this.match=true;
        }
      }
      this.getData.getProfile(this.username).subscribe((status)=>{
        console.log(status);
        this.saveUser(status,this.username);
        this.callMyArticles();
       })
    })
    
  }

  callProfile(username){
    console.log(username);
    this.route.navigate(["My-Profile",username])
  
  }
  saveUser(data,username){
    this.user=data;
    this.username=username;
    this.following=data.profile.following;
    if(localStorage.getItem('Token')){
      this.token=localStorage.getItem('Token');
    }
    }
    callSignin(){
      this.route.navigate(["Sign-In"]);
    }
    callSignup(){
      this.route.navigate(["Sign-Up"]);
    }
    saveArticles(data){
      this.articles=data;
      this.articleCount=data.articlesCount;
      this.itemPages = Array.from(
        new Array(Math.ceil(+this.articleCount / +this.limit)),
        (val, index) => index + 1
      );
    }
  callSettings(){
      this.route.navigate(["Settings"]);
    }
  callMyArticles(){
    this.getData.getMyArticles(this.username).subscribe((status)=>{console.log(status);
    this.saveArticles(status);
    });
  }
  callFavoriteArticles(){
    this.getData.getFavoriteArticles(this.username).subscribe((status)=>{console.log(status);
      this.saveArticles(status)
    });
  }
  getArticleDetails(data){
    this.route.navigate(['articles',data]);

  }
  clickonList(e){
    let offset = e * +this.limit;
    this.getData.makeFeedsRequestonPages(offset).subscribe((data) => {
        this.saveArticles(data)
       
    });
  }

}
