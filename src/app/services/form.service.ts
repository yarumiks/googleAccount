import { Injectable, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { equalPassword } from './equalpassword.validator';





@Injectable({
  providedIn: 'root'
})

export class FormService {
 
  constructor(private fb: FormBuilder) {}
    
    shareForm(): FormGroup {
      const userForm = this.fb.group({
        userInfo: this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3),]],
          surname: ['', [Validators.required, Validators.minLength(2)]],
          email: ['',[Validators.required, Validators.email]],
          password: ['', [Validators.required,Validators.minLength(7)]],
          confirm: ['']
        },{
          Validators: equalPassword
        }),
        detail: this.fb.group({
          tel: [""],
          day: [""],
          year: [""]
        })
      });
      return userForm    
    }

}

