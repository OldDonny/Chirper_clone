import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import {UserService} from './service/chirp.service'

import {AppRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    ChirpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
