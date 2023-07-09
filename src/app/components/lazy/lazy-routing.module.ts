import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
import { EndComponent } from '../end/end.component';

const routes: Routes = [
  {path: "detail", component: DetailComponent},
  {path: "end", component: EndComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
