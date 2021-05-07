import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

//Forms
import {FormsModule} from '@angular/forms';
import { AuthRememberComponent } from './auth-form/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-form/auth-message/auth-message.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
