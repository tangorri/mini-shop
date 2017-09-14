import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { ProductComponent } from './products/product/product.component';
import { LandingComponent } from './products/landing/landing.component';
import { CartComponent } from './cart/cart/cart.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ProductComponent,
    LandingComponent,
    CartComponent,
    ProductDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
