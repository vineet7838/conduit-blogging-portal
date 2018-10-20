import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConduitService } from './conduit.service';

@Component({
  selector: 'app-conduit',
  templateUrl: './conduit.component.html',
  styleUrls: ['./conduit.component.css']
})
export class ConduitComponent implements OnInit {
  public selected: Array<object>;
  tag: string;
  limit: Number = 10;
  articleCount: Number
  itemPages: any
  constructor(private router: ActivatedRoute,
    private route: Router, private getData: ConduitService) { }

  ngOnInit() {

    this.getData.getArticles().subscribe((status: Array<Object>) => {
      this.saveArticles(status);
      this.itemPages = Array.from(
        new Array(Math.ceil(+this.articleCount / +this.limit)),
        (val, index) => index + 1
      );
    });
  }
  callGlobalFeed() {
    this.getData.getArticles().subscribe((status: Array<Object>) => {
      this.saveArticles(status);
      this.itemPages = Array.from(
        new Array(Math.ceil(+this.articleCount / +this.limit)),
        (val, index) => index + 1
      );
    });

  }
  getArticleDetails(data) {
    this.route.navigate(['articles', data]);

  }
  callProfile(username) {
    console.log(username);
    this.route.navigate(["My-Profile", username])

  }
  clickonTag(e) {
    this.getData.getTagDetails(e).subscribe((data) => {
      console.log(data);
      this.saveTagName(e);
      this.saveArticles(data)

    })

  }
  saveTagName(e) {
    this.tag = e;
  }

  saveArticles(articles) {
    this.selected = articles;
    this.articleCount = articles.articlesCount;
    console.log(this.articleCount);
    console.log(this.selected);
  }
  clickonList(e) {
    let offset = e * +this.limit;
    this.getData.makeFeedsRequestonPages(offset).subscribe((data) => {
      this.saveArticles(data)

    });
  }
  callSignin() {
    this.route.navigate(["Sign-In"]);
  }
  callSignup() {
    this.route.navigate(["Sign-Up"]);
  }

}
