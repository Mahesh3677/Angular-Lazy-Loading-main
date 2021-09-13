import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PersonSummary } from './personSummary.model';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  personalDetails: any;
  professionalDetails: any;

  personalSummary: any;

  summary: PersonSummary = new PersonSummary();
  constructor(private http: HttpClient) { }



  postData(personalDetails: any, professionalDetails: any) {
    var url = environment.baseRepoUrl;
    this.summary.personalData = personalDetails;
    this.summary.professionalData = professionalDetails;

    this.http.post(url, this.summary).subscribe(
      result => {
        console.log(result)
      }
    )
  }
}
