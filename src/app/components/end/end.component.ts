import { Component } from '@angular/core';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {
faGithub = faGithub;
faLinkedin = faLinkedin;
faInstagram = faInstagram;
}
