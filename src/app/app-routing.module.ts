import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingsPageComponent} from "./listings-page/listings-page.component";
import {ListingDetailPageComponent} from "./listing-detail-page/listing-detail-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {EditListingPageComponent} from "./edit-listing-page/edit-listing-page.component";
import {NewListingPageComponent} from "./new-listing-page/new-listing-page.component";
import {MyListingsPageComponent} from "./my-listings-page/my-listings-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/listings', pathMatch: 'full'},
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  {path: 'listings/:id', component: ListingDetailPageComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listing/:id', component: EditListingPageComponent},
  {path: 'create-listing', component: NewListingPageComponent},
  {path: 'my-listing', component: MyListingsPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
