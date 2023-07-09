import { Component, ElementRef, Injectable, Input, Output, ViewChild } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { GenderI, MonthI } from './selectI';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { HomeComponent } from '../home/home.component';
import { UserModel } from 'src/app/services/user-model';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent{
  
  faCircleUser = faCircleUser;
  month: MonthI[];
  gender: GenderI[];
  detailForm: FormGroup<any>;
  dataArr = JSON.parse(localStorage.getItem('user')) || [];
  userModel: UserModel;
  selectedGender: string;
  selectedMonth: string;


  constructor(private formService: FormService, public home: HomeComponent){
    this.detailForm = this.formService.shareForm();
    this.dataArr = home.dataArr;
    this.userModel = home.userModel;
  }

  ngOnInit(){
this.month = [
  {month:"January"},
  {month:"February"},
  {month:"March"},
  {month:"April"},
  {month:"May"},
  {month:"June"},
  {month:"July"},
  {month:"August"},
  {month:"September"},
  {month:"October"},
  {month:"November"},
  {month:"December"},
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
// accessing values ​​in dropdowns
selectGender(e){
  this.selectedGender = e.target.value;
  console.log(this.selectedGender);
}

selectMonth(e){
  this.selectedMonth = e.target.value;
  console.log(this.selectedMonth);
}


// populates the data on the detail page
addDetail(){
  const gender = this.userModel.gender = this.selectedGender;
  const day = this.detailForm.get('detail').value.day;
  const year = this.detailForm.get('detail').value.year;
  const format = `${day}/${this.selectedMonth}/${year}`;
  
  const phone = this.userModel.tel = this.detailForm.get('detail').value.tel;
  const birthday = this.userModel.birthday = format;
  // add to array
 this.dataArr[this.dataArr.length - 1]['tel'] = phone;
 this.dataArr[this.dataArr.length - 1]['gender'] = gender;
 this.dataArr[this.dataArr.length - 1]['birthday'] = birthday;
localStorage.setItem("user", JSON.stringify(this.dataArr))
}
}
