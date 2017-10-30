import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {UserService} from '../service/chirp.service'
import {User} from '../user'
import {ActivatedRoute, ParamMap} from '@angular/router'
import 'rxjs/add/operator/switchMap'
import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  chirp: any


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,

  ) { }

  ngOnInit():void {
    this.route.paramMap
    .switchMap((params: ParamMap) =>{
      return  Observable.from(this.userService.getUser(params.get('id')))
      })
      .subscribe(chirp => this.chirp = chirp)
  }
  
  delete(){
    this.userService.delete(this.chirp.id)
    .subscribe(() => {

    })
  }
}



