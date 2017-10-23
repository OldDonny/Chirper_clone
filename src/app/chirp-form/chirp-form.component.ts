import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators }  from '@angular/forms';
import {USERS, RANDOMU} from '../data'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import {MatInputModule} from '@angular/material'
import {MatFormFieldModule} from '@angular/material'
import {MatCardModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material'
import {MatChipsModule} from '@angular/material'


@Component({
  selector: 'chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent {
  users= USERS;
  randoms=RANDOMU;

  chirpForm= new FormGroup({
    username: new FormControl(),
    group: new FormControl(),
    chirp: new FormControl(),
  });
}
