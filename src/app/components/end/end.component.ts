import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { DetailComponent } from '../detail/detail.component';
import { UserModel } from 'src/app/services/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {
faGithub = faGithub;
faLinkedin = faLinkedin;
faInstagram = faInstagram;
name: string;
surname: string;

constructor(private router: Router){}
ngOnInit(){
 const getDb = JSON.parse(localStorage.getItem("user"));
 this.name = getDb[getDb.length - 1].name;
 this.surname = getDb[getDb.length - 1].surname;
}

ngAfterViewInit(){
  const avatar = <HTMLElement>document.querySelector('.avatar');
  const div_name = <HTMLElement>avatar.querySelector('.name');
  const name = avatar.parentElement.querySelector('h3').innerText;
   // getting first letter
   div_name.innerText = name.charAt(9);
   // background color
   const color_code = Math.floor(Math.random()*16765217).toString(16);
   avatar.style.backgroundColor = "#" + color_code;
}

// makes localStorage clear and guard run smoother if user presses back button
@HostListener('window:popstate', ['$event'])
onPopState(event) {
  localStorage.clear()
}
}
