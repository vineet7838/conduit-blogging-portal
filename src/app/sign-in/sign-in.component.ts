import { Component, OnInit } from '@angular/core';
import { LoginService} from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public selected: Object;
  constructor(private getData: LoginService) { }
  registerUser(form: NgForm){
    this.getData.authUser(form.value).subscribe((status: Object )=> {
    this.displayData(status);
    });
    }
    displayData(data){
      this.selected = data;
      console.log(this.selected);
    }

  ngOnInit() {
  }

}