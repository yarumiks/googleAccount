import { Component, ElementRef, ViewChild } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  faCircleUser = faCircleUser;

ngOnInit(){
const phone = document.getElementById('phone');
 intlTelInput(phone, {
  initialCountry: 'TR',
  separateDialCode:true,
  utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.0/js/utils.js'
 });
}
}
