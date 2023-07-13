import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function equalPassword(): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password');
    let confirm = control.get('confirm');
    if(password && confirm && password.value != confirm.value){
        return {
            passwordequelerror: true
        }
    }
    return null
   }
}