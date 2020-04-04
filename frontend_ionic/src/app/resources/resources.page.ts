import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {

arrayBuffer:any;
file:File;
csvData : any[] = [];
headerRow : any[] = [];

  constructor(
    public http : HttpClient,
    private router: Router,
    private papa : Papa) { 
      this.loadCSV();
  }

  ngOnInit() {
    
  }

  info() {
    this.router.navigate(['/tabs/info'])
  }

  private loadCSV(){
    
    this.http.get('assets/datacsv.csv', {
      responseType : 'text'
    }).subscribe(
      data =>this.extractData(data),
      error => console.log(error)
    )
  }

  extractData(res){
     let csvData = res || '';

     this.papa.parse(csvData ,{
       complete : parsedData => {
         console.log(parsedData);
         console.log(parsedData.data.splice(0,1));
         this.headerRow = parsedData.data.splice(0,1)[0];
         this.csvData = parsedData.data;
         console.log('My array: ', this.csvData)
       }
     })
  }

  trackByFn(index : any, item : any) {
     return index;
  }

}




