import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const appRoutes: Routes = [
    {
      path: '', 
      component: NavbarComponent,
      children: [
        { path: '', component: HomeComponent, pathMatch: 'full'},
        { path: 'signin', component: SignInComponent},
        { path: 'cart', component: ShoppingcartComponent}
      ]
    }
  ];

export const routing = RouterModule.forRoot(appRoutes);
