import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingsPageComponent} from "./listings-page/listings-page.component";

const routes: Routes = [
  {path: 'listings', component: ListingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
