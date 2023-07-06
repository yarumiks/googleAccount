import { Injectable, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class FormService {
  constructor(private fb: FormBuilder) {}
    
    shareForm(): FormGroup {
      const userForm = this.fb.group({
        userInfo: this.fb.group({
          name: [""],
          surname: [""],
          email: [""],
          password: [""]
        }),
        detail: this.fb.group({
          tel: [""],
        })
      });
      return userForm    
    }
}

