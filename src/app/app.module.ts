import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { CarosalModule } from './module/carosal/carosal.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SliderModule } from './components/slider/slider.module';
import { ImgsliderComponent } from './components/imgslider/imgslider.component';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { GiftArticlesComponent } from './components/gift-articles/gift-articles.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { OrganicProductsComponent } from './components/organic-products/organic-products.component';
import { DryFruitsComponent } from './components/dry-fruits/dry-fruits.component';
import { SpicesComponent } from './components/spices/spices.component';
import { HomeCareComponent } from './components/home-care/home-care.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,


    HomeComponent,
     ImgsliderComponent,
     CartComponent,
     GiftArticlesComponent,
     GroceryComponent,
     OrganicProductsComponent,
     DryFruitsComponent,
     SpicesComponent,
     HomeCareComponent,
     CategoriesComponent,
     PageNotFoundComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarosalModule,FormsModule,ReactiveFormsModule,SliderModule,HttpClientModule, NgbModule,NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
