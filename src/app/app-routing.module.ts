import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { EndComponent } from './components/end/end.component';
import { canActivateGuard } from './services/auth.guards';




const routes: Routes = [
  {path: "", component: HomeComponent,},
  {path: "2", loadChildren: () => import("../app/components/lazy/lazy.module").then(m => m.LazyModule), canActivate: [canActivateGuard]},
  {path: "3", loadChildren: () => import("../app/components/lazy/lazy.module").then(m => m.LazyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
