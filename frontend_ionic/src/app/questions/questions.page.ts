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
    'question':'Gender',
    'type': 'text',
    'options':['Male', 'Female', 'Other'],
    'answer': ''
  },
  {
    'question':'Age',
    'options':[],
    'placeholder': 'Enter age',
    'answer': ''
  },
  {
    'question':'Have you recently traveled to an area with known local spread of COVID-19?',
     'type': 'text',
    'options':['Yes', 'No'],
    'answer': ''
  },
  {
    'question':'Have you come into close contact (within 6 feet) with someone who has a laboratory-confirmed COVID – 19 diagnoses in the past 14 days?',
     'type': 'text',
    'options':['Yes', 'No'],
    'answer': ''
  },
  {
    'question':'Do you have a fever (greater than 100.4 F > 38.0 C)?',
     'type': 'text',
    'options':['Yes', 'No'],
    'answer': ''
  },
  {
    'question':'Cough?',
     'type': 'text',
    'options':['Once in a day', '2-5 time in a day', 'More than that', 'No'],
    'answer': ''
  },
  {
    'question':'Shortness of breath?',
     'type': 'text',
    'options':['Yes', 'No'],
    'answer': ''
  },
  {
    'question':'Difficulty breathing?',
     'type': 'text',
    'options':['Yes', 'No'],
    'answer': ''
  },
  {
    'question':'Existing/History Medical Condition.',
     'type': 'text',
    'options':['Heart disease', 'Diabetes', 'Lung disease', 'Asthma', 'HIV', 'No'],
    'answer': ''
  }
  ]
  submitQues() {
    for (var i=0; i< this.dict.length; i++) {
      if (this.dict[i]['answer'] == '') {
        this.utils.presentToast('Question ' + (i+1) + ' is empty!')
        // return
      }
    }

    this.utils.presentModal();
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
