import { Injectable, Component } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private toast: ToastController,
    public modalController: ModalController) { }

  async presentToast(message) {
    const t = await this.toast.create({
      message: message,
      duration: 3000
    });

    t.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
