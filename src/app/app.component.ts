import { Component } from '@angular/core';
import { userAccount } from './models/userAcount.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  remember: boolean = false;
  loginUser(event: userAccount){
    console.log(event, this.remember)
  }
  newUser(event: userAccount){
    console.log(event)
  }
  checked(event: boolean){
    this.remember = event;
  }
}
