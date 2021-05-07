//ContentChildren
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { userAccount } from '../models/userAcount.model';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements AfterContentInit {
  @Output()
  user: EventEmitter<userAccount> = new EventEmitter<userAccount>();
  showMessage: boolean = false;
  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent> = new QueryList();

  constructor() {}

  ngAfterContentInit() {
    
    if (this.remember) {
      this.remember.forEach((item) => {
        console.log('item',item)
        item.check.subscribe((checked: any) => this.showMessage = checked.target.checked);
        //item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
      
    }
  }

  onSubmit(userAccount: userAccount) {
    this.user.emit(userAccount);
  }
}

/*import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import { userAccount } from '../models/userAcount.model';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements AfterContentInit {
  @Output()
  user: EventEmitter<userAccount> = new EventEmitter<userAccount>();
  showMessage: boolean = false;
  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent = new AuthRememberComponent();

  constructor() {}

  ngAfterContentInit() {
    
    if (this.remember) {
      this.remember.check.subscribe((checked: any) => {
        console.log('entro a la subs', checked)
        this.showMessage = checked.target.checked;
      });
    }
  }

  onSubmit(userAccount: userAccount) {
    this.user.emit(userAccount);
  }
}
*/