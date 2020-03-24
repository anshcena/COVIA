import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private utils: UtilityService) { 
  }

  ngOnInit() {
   
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

 dict = [
  {
    'question':{
    'english': 'PIN Code',
    'hindi' : 'पिन कोड'
    },
    'options':[],
    'placeholder':{
    'english':'Enter your PIN code',
    'hindi': 'अपना पिनकोड दर्ज करें'
    },
    'answer': '',
    'points': '0',
  },
  {
    'question':{
    'english': 'Gender',
    'hindi' : 'लिंग'
    },
    'options':{
    'english':['Male', 'Female', 'Other'],
    'hindi':['पुरुष', 'महिला', 'अन्य']
    },
    'answer': '',
    'points': '0',
  },
  {
    'question':{
    'english': 'Age',
    'hindi' : 'आयु'
    },
    'options':[],
    'placeholder':{
    'english':'Enter age',
    'hindi': 'उम्र दर्ज करें'
    } ,
    'answer': '',
     'points': '0',
  },
  {
    'question':{
    'english': 'Have you recently traveled to an area with known local spread of COVID-19?',
    'hindi' : 'क्या आपने हाल ही में COVID-19 के ज्ञात स्थानीय प्रसार वाले क्षेत्र की यात्रा की है?'
    },
    'options':{
    'english': ['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    }
   ,
    'answer': '',
     'points': '3',
  },
   {
    'question':{
    'english': 'Have you travelled recently during the past 14 days?',
    'hindi' : 'क्या आपने पिछले 14 दिनों के दौरान हाल ही में यात्रा की है?'
    },
    'options':{
    'english': ['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    }
   ,
    'answer': '',
     'points': '3',
  },
  {
    'question':{
    'english':'Have you come into close contact (within 6 feet) with someone who has a laboratory-confirmed COVID – 19 diagnoses in the past 14 days?',
    'hindi':'क्या आप पिछले 14 दिनों में प्रयोगशाला निदान की पुष्टि करने वाले COVID - 19 वाले किसी व्यक्ति के साथ (6 फीट के भीतर) निकट संपर्क में आए हैं?',
    },
     'type': 'text',
    'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
     'answer': '',
     'points': '3',
  },
  {
    'question':{
    'english':'Do you have a fever (greater than 100.4 F > 38.0 C)?',
    'hindi': 'क्या आपको बुखार है (100.4 F> 38.0 C से अधिक)?',
    },
     'type': 'text',
    'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
     'points': '1',
  },
  {
    'question':{
    'english':'Cough?',
    'hindi':'खांसी?',
    },
    'options':{
    'english':['Once in a day', '2-5 time in a day', 'More than that', 'No'],
    'hindi':['दिन में एक बार', 'दिन में 2-5 बार', 'इससे ज्यादा बार', 'नहीं'],
    },
    'answer': '',
     'points': '1',
  },
  {
    'question':{
    'english':'Do you have sore throat?',
    'hindi':'क्या आपके गले में खराश है?',
    },
    'options':{
    'english': ['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
     'points': '1',
  },
  {
    'question':{
    'english':'Difficulty breathing?',
    'hindi':'सांस लेने मे तकलीफ?',
    },
    'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
     'points': '2',
  },
  {
    'question':{
    'english':'Existing/History Medical Condition.',
    'hindi':'मौजूदा / इतिहास चिकित्सा स्थिति।',
    },
    'options':{
    'english':['Heart disease', 'Diabetes', 'Lung disease', 'Asthma', 'HIV', 'No'],
    'hindi':['दिल के रोग', 'मधुमेह', 'फेफड़ों की बीमारी','दमा','मानव रोगक्षमपयॉप्तता विषाणु(HIV)', 'नहीं'],
    },
    'answer': '',
     'points': '0',
  },
   {
    'question':{
    'english':'Are you expriencing fatigue?',
    'hindi':'क्या आपको थकान हो रही है?',
    },
     'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
     'points': '2',
  },
   {
    'question':{
    'english':'Are you expriencing MYAGLIA or body aches?',
    'hindi':'क्या आपको मांसपेशियों या शरीर में दर्द हो रहा है?',
    },
     'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
     'points': '1',
  },
   {
    'question':{
    'english':'Do you have cold?',
    'hindi':'क्या आपको सर्दी है?',
    },
     'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
     'points': '1',
  },
   {
    'question':{
    'english':'Are you having Diarrhea?',
    'hindi':'क्या आपको दस्त है?',
    },
     'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
     'points': '1',
  },
   {
    'question':{
    'english':'Do you have a headache?',
    'hindi':'क्या आपको सिरदर्द हो रहा है?',
    },
     'options':{
    'english':['Yes', 'No'],
    'hindi':['हाँ', 'नहीं'],
    },
    'answer': '',
    'points': '1',
  }
  ]
  submitQues() {
    var score = 0, percent = 0.0;
    console.log(this.dict)
    var pin_code = this.dict[0]['answer'].toString();

    // check if zip code is entered
    if (isNaN(Number(this.dict[0]['answer']))) {
      if (AppComponent.currentLang == 'english') {
        this.utils.presentToast('PIN Code should be a number');
      } else {
        this.utils.presentToast('पिन कोड नंबर होना चाहिए।')
      }
      return
    }

    if (pin_code.length != 6) {
      if (AppComponent.currentLang == 'english') {
        this.utils.presentToast('PIN Code must of 6 numbers');
      } else {
        this.utils.presentToast('पिन कोड 6 अंकों का होना चाहिए।');
      }
      return;
    }

      // check age
      if (isNaN(Number(this.dict[2]['answer'].toString()))) {
        if (AppComponent.currentLang == 'english') {
          this.utils.presentToast('Age should be a number');
        } else {
          this.utils.presentToast('उम्र नंबर होना चाहिए।')
        }
        return
      }

      if (Number(this.dict[2]['answer']) < 1 && Number(this.dict[2]['answer']) > 110) {
        if (AppComponent.currentLang == 'english') {
          this.utils.presentToast('You are too old!');
        } else {
          this.utils.presentToast('तुम इतने बूढ़े नहीं हो।');
        }
        return;
      }

    for (var i=0; i< this.dict.length; i++) {

      if (this.dict[i]['answer'] == '') {
        if (AppComponent.currentLang == 'english') {
          this.utils.presentToast('Question ' + (i+1) + ' is empty!')
        } else {
          this.utils.presentToast('सवाल ' + (i+1) + ' खाली है।')
        }
        
        return
      }

      // add score for bool answer
      if (this.dict[i]['answer'] != 'No' || this.dict[i]['answer'] == 'नहीं')
      score = score + Number(this.dict[i]['points']);
      
    }


    // compute %
    percent = (score/20) * 80

    var result = score >=0 && score <=2 ? 'green': score >=3 && score <=5 ? 'yellow' : score >= 6 && score <=12 ? 'orange' : 'red'

    const form = new FormData();
    form.append('zip_code', pin_code);
    form.append('result', result);
    form.append('score', score.toString())
    form.append('response', JSON.stringify(this.dict.map((val) => {return val['answer']})))
        
    this.utils.presentModal({ 
        score: score,
        percent: percent.toFixed(2),
        data: form,
        heart_class: result
      }
    );

    this.http.post(AppComponent.base + 'self_check', form).subscribe((res) => {
      console.log(res)
   }, (err) => {
     console.log(err)
   });
  }

  setAns(index, ans) {
    this.dict[index]['answer'] = ans.toString();

     var qs = document.getElementsByClassName('quest' + index)
     for (var i=0; i<qs.length; i++) {
       qs[i].setAttribute('color', 'light');
      //  qs[i].style.color = "#fff";
     }
     document.getElementById(ans+index).setAttribute('color', 'primary');
     document.getElementById(ans+index).style.color = "#136f61";
  }
 }
