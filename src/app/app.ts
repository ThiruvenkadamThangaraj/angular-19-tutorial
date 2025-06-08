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
  count: number = 0;
  name: string = "Thiruvenkadam";
  data3: number = 300;
  data4: any;

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
    console.log('data4=400 = ' + this.data4);
    this.data4 = "Hello World!";
    console.log('data4=Hello World!=' + this.data4);
  }
  protected title = 'angular-19-tutorial Studied by Thiru';

  hello = 'Hello World!';
  data = 100;
  data1 = 200;

  sum(a: number, b: number) {
    console.log(a + b);
    return a + b;
  }
  handleIncrement() {
    this.count++;
    console.log('Incremented Count: ' + this.count);
  }
  handleDecrement() {
    this.count--;
    console.log('Decremented Count: ' + this.count);
  }
  resetCount() {
    this.count = 0;
    console.log('Count Reset to: ' + this.count);
  }

  handleCounterChange(value: string) {
    if (value == 'minus') {
      this.count--;
    } else if (value == 'plus') {
      this.count++;
    } else if (value == 'reset') {
      this.count = 0;
    }
  }
}