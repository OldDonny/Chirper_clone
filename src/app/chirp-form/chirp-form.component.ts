import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup }            from '@angular/forms';

@Component({
  selector: 'chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent {
  chirpForm= new FormGroup({
    username: new FormControl(),
    group: new FormControl(),
    chirp: new FormControl(),
  });


  constructor() { }


}
