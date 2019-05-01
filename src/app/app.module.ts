import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  DataService } from './home/data.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { ShoppingListComponent } from './home/shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
