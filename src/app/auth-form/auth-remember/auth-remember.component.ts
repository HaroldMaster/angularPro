import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.scss']
})
export class AuthRememberComponent implements OnInit {

  @Output()
  check : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onCheck(event: Event){
    this.check.emit(event);
  }
}
