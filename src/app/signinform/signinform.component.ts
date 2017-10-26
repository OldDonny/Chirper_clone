import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent implements OnInit {
  signin:FormGroup
  constructor(private fb: FormBuilder) { 
    this.signin = this.fb.group({
      Username:['',Validators.required],
      Password:['',Validators.required],
    })
  }

  ngOnInit() {
  }

}
