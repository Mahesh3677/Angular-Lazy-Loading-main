import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  submitted = false;
  // disableMiddleName: boolean = false;
  //disableMiddleName: boolean = true;
  isDisabled = true;

  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      Mob: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10)]],
      address: ['', Validators.required]
    });
    if (this.commonService.personalDetails) {
      console.log(this.commonService.personalDetails)
      this.registerForm.setValue(this.commonService.personalDetails);
      if (this.commonService.personalDetails.middleName != "") {
        this.isDisabled = false;
      }
    }
  }
  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  goToNext() {
    if (this.registerForm.invalid) {
      return;
    }
    this.commonService.personalDetails = this.registerForm.value;

    this.router.navigate(['/two']);
  }
  // toggle(e: any) {
  //   this.disableMiddleName = e;
  // }

  triggerSomeEvent() {
    this.isDisabled = !this.isDisabled;
    return;
  }

}
