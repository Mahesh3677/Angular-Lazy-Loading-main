import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonSummary } from './personSummary.model';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  personalDetails: any;
  professionalDetails: any;

  personalSummary : any;

  summary : PersonSummary =new PersonSummary();
  constructor(private http : HttpClient) { }

  

  postData( personalDetails: any , professionalDetails: any)
  {
    
   this.summary.personalData = personalDetails;    
   this.summary.professionalData = professionalDetails;

    this.http.post('url',this.summary).subscribe(
      result => {
        console.log(result)
      }
    )
  }
}
