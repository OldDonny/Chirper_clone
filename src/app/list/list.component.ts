import { Component,Input, OnInit } from '@angular/core';
import {USERS} from '../data'
import {User} from '../user'
import {UserService} from '../service/chirp.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  users=USERS;
  constructor(
    private userService: UserService,) { }
    


  getUsers():void{
    this.userService.getUsers().then(users=> this.users=users)
  }

  ngOnInit() {
    this.getUsers();
  }

}
