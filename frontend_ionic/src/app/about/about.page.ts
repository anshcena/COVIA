import { AppComponent } from './../app.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  constructor() { }

  public AppRef = AppComponent;

 
}
