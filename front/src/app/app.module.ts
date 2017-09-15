import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProductComponent } from './product/product.component';
import { LandingComponent } from './products/landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProductComponent,
    LandingComponent,
    CartComponent,
    ProductDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
