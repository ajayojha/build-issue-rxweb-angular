import { Component } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'build-test';
  constructor(formBuilder:RxFormBuilder){
let group = formBuilder.group({"Abc":"abc"});

  }
}
