import { BrowserService } from './../browser.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-awareness',
  templateUrl: './awareness.page.html',
  styleUrls: ['./awareness.page.scss'],
})
export class AwarenessPage implements OnInit {
hindi = []
english = []
activated: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private browser: BrowserService
    ) {
      this.activated = "hindi";
      
     }

  ngOnInit() {
    this.fetchData()
  }


  info() {
    this.router.navigate(['/tabs/info'])
  }

  loadLink(link) {
    this.browser.openLink(link);
  }

  fetchData() {
    this.http.get(AppComponent.base + 'awareness').subscribe((res) => {
      console.log(res)
      if(res['status']) {
        this.hindi = res['data']['links']['hindi']
        this.english = res['data']['links']['english']
      }
      else {

      }
    }, (error) => {
        console.log(error)
      });
  }
  openHindi(){
    let hindi = document.getElementById('hindi');
    let english = document.getElementById('english');
     hindi.style.display = "block";
     english.style.display = "none";
  }
  openEng(){
      let hindi = document.getElementById('hindi');
    let english = document.getElementById('english');
     hindi.style.display = "none";
     english.style.display = "block";
  }
}
