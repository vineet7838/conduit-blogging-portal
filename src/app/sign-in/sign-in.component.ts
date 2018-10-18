import { Component, OnInit } from '@angular/core';
import { LoginService} from './login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public selected: Object;
  constructor(private getData: LoginService, private route: Router,private router: ActivatedRoute ) { }
  loginUser(form: NgForm){
    this.getData.authUser(form.value).subscribe((status: Object )=> {
    this.displayData(status);
    });
    }
    displayData(data){
      this.selected = data;
      localStorage.setItem('Token',data.user.token);
      localStorage.setItem('username',data.user.username);
      this.route.navigate(['Home']);
      // var token=localStorage.getItem('Token');
      // var username=localStorage.getItem('username');
      // console.log("username: "+username+"token: "+token);
    }

  ngOnInit() {
  }
  callSignin(){
    this.route.navigate(["Sign-In"]);
  }
  callSignup(){
    this.route.navigate(["Sign-Up"]);
  }
}
