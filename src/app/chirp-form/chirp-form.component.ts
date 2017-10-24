import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators }  from '@angular/forms';
import {USERS, RANDOMU} from '../data'
import {User} from '../user'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import {MatInputModule} from '@angular/material'
import {MatFormFieldModule} from '@angular/material'
import {MatCardModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material'
import {MatChipsModule} from '@angular/material'
import {Router} from '@angular/router'
import {UserService} from '../service/chirp.service'



@Component({
  selector: 'chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent {


  constructor(
    private srv: UserService,
    private router: Router,
  ) { }

  randomId():number{
    return Math.floor(Math.random()*1222);
  }

  pushChirp(chirp:string,){
    let id=this.randomId();
    let newChirp={id, username: 'Oledonny' ,group: "Moderator" ,chirp,}
    USERS.unshift(newChirp)
    this.router.navigate(['/listpage'])
      
  }

}
