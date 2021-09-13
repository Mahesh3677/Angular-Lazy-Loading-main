import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  professionalForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private commonService: CommonService, private router: Router) { }
  submitted = false;
  ngOnInit(): void {
    this.professionalForm = this.formBuilder.group({

      cname: ['', Validators.required],
      years: ['', Validators.required],
      minsalary: ['', Validators.required],
      maxsalary: ['', Validators.required],
      rname: ['', Validators.required]
    });
    if (this.commonService.professionalDetails) {
      this.professionalForm.setValue(this.commonService.professionalDetails);
    }
  }
  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.professionalForm.controls;
  }
  goToSummary() {
    if (this.professionalForm.invalid) {
      return;
    }
    this.commonService.professionalDetails = this.professionalForm.value;
    this.router.navigate(['/three'])
  }
  goToPersonal() {
    this.router.navigate(['/one'])
  }
}
