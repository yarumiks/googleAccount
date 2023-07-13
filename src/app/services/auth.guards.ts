import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { FormService } from "./form.service";
import { HomeComponent } from "../components/home/home.component";

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    const getStorage = !!localStorage.getItem('user');
    const router = inject(Router)
    if (!getStorage) {
        alert('You are not login')
        router.navigate([''])
        return false
    }
    return true
}