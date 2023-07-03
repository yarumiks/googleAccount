import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showPassword = () =>{
    const password = <HTMLInputElement>document.getElementById("pasw");
    const confirm = <HTMLInputElement>document.getElementById("conf");
       if(password.type ==="password" && confirm.type==="password"){
           password.type= "text";
           confirm.type= "text";
       } else{
           password.type= "password";
           confirm.type= "password";
       }
   }  
}
