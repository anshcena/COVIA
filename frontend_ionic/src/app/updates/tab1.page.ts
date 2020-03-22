import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  table_head = []
  table_data = []

  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.fetchUpdates();
  }

  fetchUpdates() {
     this.http.get(AppComponent.base + 'india_data').subscribe((res) => {
       console.log(res)
        if (res['status']) {
        this.table_head = res['data']['table'][0]
        this.table_data = res['data']['table'][1]
      }
     }, (err) => {
       console.log(err)
     });
  }
}
