import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = "Thiruvenkadam";
  data3: number = 300;
  data4:any;
  
  userLogin: boolean = false;
   handClickEvent() {
    //alert('Button Clicked!');
    console.log('Button Clicked!');
    this.otherFunction();
   
  }
  otherFunction() {
  
    console.log('Other Function Called!');
    console.log(this.name);
    console.log(this.userLogin);
    this.data4 = 500;
    console.log('data4=400 = '+this.data4);
    this.data4 = "Hello World!";
   console.log('data4=Hello World!='+this.data4);
  }
  protected title = 'angular-19-tutorial Studied by Thiru';
 
  hello= 'Hello World!';
  data =100;
  data1 = 200;

  sum(a: number, b: number) {
    console.log(a+b);
    return a + b;
  }
}
