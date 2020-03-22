import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-myths',
  templateUrl: './myths.page.html',
  styleUrls: ['./myths.page.scss'],
})
export class MythsPage implements OnInit {

  title = []
  image = []

  constructor(private http: HttpClient,
              private router: Router,
              private photoViewer: PhotoViewer) { }

  ngOnInit() {
    this.fetchMyths();
  }

  fetchMyths() {
    this.http.get(AppComponent.base + 'myths').subscribe((res) => {
      if (res['status']) {
        this.title = res['data']['title']
        this.image = res['data']['src']
      } else {

      }
    }, (error) => {
      console.log(error)
    });
  }

info() {
  this.router.navigate(['/tabs/info'])
}
zoomImage() {
  this.photoViewer.show('{{image[i]}}');
}
}
