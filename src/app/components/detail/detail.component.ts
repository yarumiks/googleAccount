import { Component, ElementRef, ViewChild } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { GenderI, MonthI } from './selectI';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  faCircleUser = faCircleUser;
  month: MonthI[];
  gender: GenderI[];
  detailForm: FormGroup<any>;

  constructor(private formService: FormService){
    this.detailForm = this.formService.shareForm();
  }

  ngOnInit(){


this.month = [
  {id:1,month:"January"},
  {id:2,month:"February"},
  {id:3,month:"March"},
  {id:4,month:"April"},
  {id:5,month:"May"},
  {id:6,month:"June"},
  {id:7,month:"July"},
  {id:8,month:"August"},
  {id:9,month:"September"},
  {id:10,month:"October"},
  {id:11,month:"November"},
  {id:12,month:"December"},
]


this.gender = [
  {gender: "Male"},
  {gender: "Female"},
  {gender: "Rather not say"},
]



  //phone number code 
const phone = document.getElementById('phone');
 intlTelInput(phone, {
  initialCountry: 'TR',
  separateDialCode:true,
  utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.0/js/utils.js'
 });
}

fullForm() {
  console.log(this.detailForm.value);
  }
}
