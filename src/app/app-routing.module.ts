import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { EndComponent } from './components/end/end.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detail", component: DetailComponent},
  {path: "end", component: EndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
