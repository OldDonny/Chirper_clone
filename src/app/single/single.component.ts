import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {UserService} from '../service/chirp.service'
import {User} from '../user'
import {USERS} from '../data'
import {ActivatedRoute, ParamMap} from '@angular/router'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @Input()user: User;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,

  ) { }

  ngOnInit():void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
    .subscribe((user) => {
      this.user = user
    });
  }

}
