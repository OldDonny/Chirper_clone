import { Component } from '@angular/core';
import {ListComponent} from './list/list.component'
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import {MatMenuModule} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
