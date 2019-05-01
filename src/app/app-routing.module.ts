import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { ProductListComponent } from './home/product-list/product-list.component';

const routes: Routes = [
  { path:"prodDetails", component:ProductDetailsComponent},
  { path:"prodList", component:ProductListComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
