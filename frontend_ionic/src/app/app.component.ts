import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',  
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  static base="https://covia-api.robomx.tech/";

  static languageToggle = false;
  static currentLang = 'english';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    // this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  static content = {
    "home": {
      "english": {
        "title": "COVIA",
        "subtitle":"Corona Virus Alert app containing informative real data of the outburst.",
        "checkupButton": "Self Check-Up",
        "trackButton": "Track World Cases",
        "updates" : "Get official world updates from",
        "on": "on",
        "region": "Indian region updates from",
        "mohfw": "Ministry of Health and Family Welfare",
        "hindi": "Hindi",
        "who": "WHO"
  },
      "hindi": {
        "title": "कोविआ",
        "subtitle": "कोरोना वायरस अलर्ट ऐप जिसमें मुखरता का वास्तविक डेटा है।",
        "checkupButton": "सेल्फ चेक-अप",
        "trackButton": "विश्व मामलों को ट्रैक करें",
        "updates": "से आधिकारिक विश्व अपडेट प्राप्त करें",
        "on": "पर",
        "region":  "भारतीय क्षेत्र से अद्यतन",
        "mohfw": "स्वास्थ्य और परिवार कल्याण मंत्रालय",
        "hindi": "हिंदी",
        "who": "विश्व स्वास्थ्य संगठन"
      }
    },
    "about": {
      "english": {
          "hindi": "Hindi",
          "symptoms": "Symptoms source:",
          "precaution": "Precautions source:",
          "github": "Star our GitHub repository",
          "support": "Supporters",
          "title": "Data curated from",
          "and": "and",
          "website": "website",
          "mohfw": "MOHFW",
      },
      "hindi": {
          "hindi": "हिंदी",
          "symptoms": "लक्षण स्रोत:",
          "precaution": "सावधानियाँ स्रोत:",
          "github": "हमारे GitHub भंडार को स्टार करें",
          "support": " हमारे समर्थक",
          "who": "विश्व स्वास्थ्य संगठन ",
          "and": "और",
          "mohfw": "स्वास्थ्य और परिवार कल्याण मंत्रालय",
          "website": "वेबसाइट से डेटा प्राप्त किया गया है।"
      }
    },
    "updates": {
      "english": {
        "hindi": "Hindi",
        "updates": "Updates",
         "dataSource": "Data Source",
         "mohfw": "MOHFW",
      },
      "hindi": {
        "hindi": "हिंदी",
        "updates": "अपडेट",
        "dataSource": "डेटा स्रोत",
        "mohfw": "स्वास्थ्य और परिवार कल्याण मंत्रालय",
      }
    },
    }
}
