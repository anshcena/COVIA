import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  home() {
   this.router.navigate(['/tabs']);
 }
 }
