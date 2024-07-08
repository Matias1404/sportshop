import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TShirtListComponent } from './components/t-shirt-list/t-shirt-list.component';
import { SportshopTshirtsComponent } from './components/sportshop-tshirts/sportshop-tshirts.component';
import { SportshopContactComponent } from './components/sportshop-contact/sportshop-contact.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TShirtListComponent,
    SportshopTshirtsComponent,
    SportshopContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
