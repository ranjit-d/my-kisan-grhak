import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CarosalComponent } from './components/carosal/carosal.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { GiftArticlesComponent } from './components/gift-articles/gift-articles.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { OrganicProductsComponent } from './components/organic-products/organic-products.component';
import { DryFruitsComponent } from './components/dry-fruits/dry-fruits.component';
import { SpicesComponent } from './components/spices/spices.component';
import { HomeCareComponent } from './components/home-care/home-care.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';





const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},

  {path:'login',component:LoginComponent, },
  {path:'signup',component:SignUpComponent},
  {path:'home',component:HomeComponent,
},
  {path:'giftarticles',component:GiftArticlesComponent},
  {path:'grocery',component:GroceryComponent},
  {path:'organicproduct',component:OrganicProductsComponent},
  {path:'dryfruits',component:DryFruitsComponent},
  {path:'spices',component:SpicesComponent},
  {path:'homecare',component:HomeCareComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
