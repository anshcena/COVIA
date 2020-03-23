import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalCtrl: ModalController) { }

  percent;
  score;
  heart_class;
  data;

  ngOnInit() {
    this.sendData()
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  home() {
    this.router.navigate(['/tabs']);
   }

 public AppRef = AppComponent;

  setLang() {
    if (AppComponent.languageToggle) {
      AppComponent.currentLang = 'english';
    } else {
      AppComponent.currentLang = 'hindi';
    }
  }

  sendData() {
     var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    let options = { headers: headers };

     this.http.post(AppComponent.base + 'self_check', JSON.stringify(this.data), options).subscribe((res) => {
        console.log(res)
     }, (err) => {
       console.log(err)
     });
  }
}
