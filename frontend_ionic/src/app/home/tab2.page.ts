import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router,
              ) {}

  questionSection(){
    this.router.navigate(['/questions']);
    
    //  this.geolocation.getCurrentPosition(
    //   {maximumAge: 1000, timeout: 5000,
    //   enableHighAccuracy: true }
    //   ).then((resp) => {
    //         alert(JSON.stringify( resp.coords));

    //         this.lat=resp.coords.latitude
    //         this.lng=resp.coords.longitude
    //         },er=>{
    //           alert('Can not retrieve Location')
    //         }).catch((error) => {
    //         alert('Error getting location - '+JSON.stringify(error))
    //         });
        }
}
