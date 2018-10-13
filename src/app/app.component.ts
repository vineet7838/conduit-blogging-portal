import { Component } from '@angular/core';
import { LoginService} from './login.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login-testing';
  public myData: Object ;
  public selected: Object;
  constructor(private getData: LoginService){
 
    }
    registerUser(form: NgForm){
     
     this.getData.authUser(form.value).subscribe((status: Object )=> {
      this.displayData(status);
    });
    
    }
    displayData(data){
      this.selected = data;
      console.log(this.selected);
    }
    
  ngOnInit(){}
}