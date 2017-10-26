import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import {MatInputModule, MatRadioModule} from '@angular/material'
import {MatFormFieldModule} from '@angular/material'
import {MatCardModule} from '@angular/material'
import {MatMenuModule} from '@angular/material';
import {MatChipsModule} from '@angular/material'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import {UserService} from './service/chirp.service'
import {MatToolbarModule} from '@angular/material'
import {MatGridListModule} from '@angular/material';

import {AppRoutingModule} from './app-routing-module';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListpageComponent } from './listpage/listpage.component';
import { OnlineusersComponent } from './onlineusers/onlineusers.component';
import { SignupComponent } from './signup/signup.component';
import { SigninformComponent } from './signinform/signinform.component';
import { InfoDirective } from './info.directive';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    ChirpFormComponent,
    SinglepageComponent,
    HomepageComponent,
    ListpageComponent,
    OnlineusersComponent,
    SignupComponent,
    SigninformComponent,
    InfoDirective
  ],
  imports: [
   
    MatGridListModule,
    MatRadioModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatChipsModule,

    AppRoutingModule,
  ],
  providers: [UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
