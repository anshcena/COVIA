import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  card_details = [{
    "image": "../../assets/icon/myths.png",
    "color": "#d9e1da"
  }]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mythPageRoute() {
    this.router.navigate(['/myths']);
  }

}
