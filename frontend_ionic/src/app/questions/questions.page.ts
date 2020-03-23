import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor(
    private router: Router,
    private utils: UtilityService) { }

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
  async submitQues() {
    var score = 0, percent = 0.0;

    for (var i=0; i< this.dict.length; i++) {
      if (this.dict[i]['answer'] == '') {
        this.utils.presentToast('Question ' + (i+1) + ' is empty!')
        return
      }

      // add score for bool answer
      if (this.dict[i]['answer'] != 'No' || this.dict[i]['answer'] == 'नहीं')
      score = score + Number(this.dict[i]['points']);

      // compute %
      percent = (score/20) * 80
      
    }

    var {lat, long} = await this.utils.getLocation();

    var result = score >=0 && score <=2 ? 'green': score >=3 && score <=5 ? 'yellow' : score >= 6 && score <=12 ? 'orange' : 'red'

    var data = {
      'lat': lat,
      'lon': long,
      'score': score,
      'response': this.dict.map((val) => {return val['answer']}),
      'result': result
    }


    this.utils.presentModal({ 
        score: score,
        percent: percent.toFixed(2),
        data: data,
        heart_class: result
      }
    );
  }

  setAns(index, ans) {
    this.dict[index]['answer'] = ans;

     var qs = document.getElementsByClassName('quest' + index)
     for (var i=0; i<qs.length; i++) {
       console.log(qs)
       qs[i].setAttribute('color', 'light');
      //  qs[i].style.color = "#fff";
     }
     document.getElementById(ans+index).setAttribute('color', 'primary');
     document.getElementById(ans+index).style.color = "#136f61";
  }
 }
