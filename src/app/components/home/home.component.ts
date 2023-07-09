import { Component, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormService} from 'src/app/services/form.service';
import { UserModel } from 'src/app/services/user-model';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FormService]
})
export class HomeComponent {
  formHome: FormGroup<any>;
  userModel: UserModel = new UserModel();
  userForm: any;
  dataArr = JSON.parse(localStorage.getItem('user')) || [];

  constructor(private formService: FormService){
    this.formHome = this.formService.shareForm();
  }
  //show & hide password
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

  saveData() {
    // Populate the object in user-model.ts
      this.userModel.name = this.formHome.get('userInfo').value.name;
      this.userModel.surname = this.formHome.get('userInfo').value.surname;
      this.userModel.email = this.formHome.get('userInfo').value.email;
      this.userModel.password = this.formHome.get('userInfo').value.password;
     

    this.dataArr.push(this.userModel)
    localStorage.setItem("user", JSON.stringify(this.dataArr))
  }

  }



