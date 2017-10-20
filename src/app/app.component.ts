import { Component } from '@angular/core';
import {ListComponent} from './list/list.component'
import { ChirpFormComponent } from './chirp-form/chirp-form.component';

@Component({
  selector: 'app-root',
  template: `<chirp-form></chirp-form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
