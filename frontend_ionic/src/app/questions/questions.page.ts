import { Component, OnInit } from '@angular/core';
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
 dict = [
  {
    'question':{
    'eng': 'Gender',
    'hindi' : 'लिंग'
    },
    'options':{
    'eng':['Male', 'Female', 'Other'],
    'hindi':[पुरुष, महिला, अन्य]
    },
    'answer': {
    'eng': '',
    'hindi': ''
    },
    'points': '0',
  },
  {
    'question':{
    'eng': 'Age',
    'hindi' : 'आयु'
    },
    'options':[],
    'placeholder':{
    'eng':'Enter age',
    'hindi': 'उम्र दर्ज करें'
    } ,
    'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '0',
  },
  {
    'question':{
    'eng': Have you recently traveled to an area with known local spread of COVID-19?',
    'hindi' : 'क्या आपने हाल ही में COVID-19 के ज्ञात स्थानीय प्रसार वाले क्षेत्र की यात्रा की है?'
    },
    'options':{
    'eng': ['Yes', 'No'],
    'hindi':[हाँ, नहीं],
    }
   ,
    'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '3',
  },
  {
    'question':{
    'eng':'Have you come into close contact (within 6 feet) with someone who has a laboratory-confirmed COVID – 19 diagnoses in the past 14 days?',
    'hindi':'क्या आप पिछले 14 दिनों में प्रयोगशाला निदान की पुष्टि करने वाले COVID - 19 वाले किसी व्यक्ति के साथ (6 फीट के भीतर) निकट संपर्क में आए हैं?',
    },
     'type': 'text',
    'options':{
    'eng':['Yes', 'No'],
    'hindi':[हाँ, नहीं],
    },
     'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '3',
  },
  {
    'question':{
    'eng':'Do you have a fever (greater than 100.4 F > 38.0 C)?',
    'hindi':क्या आपको बुखार है (100.4 F> 38.0 C से अधिक)?,
    },
     'type': 'text',
    'options':{
    'eng':['Yes', 'No'],
    'hindi':[हाँ, नहीं],
    },
    'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '1',
  },
  {
    'question':{
    'eng':'Cough?',
    'hindi':खांसी?,
    },
    'options':{
    'eng':['Once in a day', '2-5 time in a day', 'More than that', 'No'],
    'hindi':[दिन में एक बार, दिन में 2-5 बार, इससे ज्यादा बार, नहीं],
    },
    'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '1',
  },
  {
    'question':{
    'eng':'Shortness of breath?',
    'hindi':'साँसों की कमी?',
    },
    'options':{
    'eng':,
    'hindi':[हाँ, नहीं],
    }['Yes', 'No'],
    'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '2',
  },
  {
    'question':{
    'eng':'Difficulty breathing?',
    'hindi':'सांस लेने मे तकलीफ?',
    },
    'options':{
    'eng':['Yes', 'No'],
    'hindi':[हाँ, नहीं],
    },
    'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '2',
  },
  {
    'question':{
    'eng':'Existing/History Medical Condition.',
    'hindi':मौजूदा / इतिहास चिकित्सा स्थिति।,
    },
    'options':{
    'eng':['Heart disease', 'Diabetes', 'Lung disease', 'Asthma', 'HIV', 'No'],
    'hindi':[दिल के रोग, मधुमेह, फेफड़ों की बीमारी, दमा, मानव रोगक्षमपयॉप्तता विषाणु(HIV), नहीं],
    },
    'answer': {
    'eng': '',
    'hindi': ''
    },
     'points': '1',
  }
  ]
  async submitQues() {
    for (var i=0; i< this.dict.length; i++) {
      if (this.dict[i]['answer'] == '') {
        this.utils.presentToast('Question ' + (i+1) + ' is empty!')
        return
      }
    }

    this.utils.presentModal();
    var {lat, long} = await this.utils.getLocation();
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
