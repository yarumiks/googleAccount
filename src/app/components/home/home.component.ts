import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormService} from 'src/app/services/form.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FormService]
})
export class HomeComponent {
  formHome: FormGroup<any>;
  constructor(private formService: FormService){
    this.formHome = this.formService.shareForm();
  }

   ngSubmit(){
    console.log(this.formHome.value);
   }

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



