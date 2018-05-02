import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { routing } from './app.router';

import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StockAlertComponent } from './stock-alert/stock-alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatToolbar,
  MatIconRegistry
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    HomeComponent,
    ShoppingcartComponent,
    SignUpComponent,
    ProductDetailComponent,
    DashboardComponent,
    CheckoutComponent,
    ProductDetailComponent,
    OrderDetailComponent,
    StockAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    routing,
    MatDialogModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatChipsModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SignInComponent, 
    SignUpComponent,
    ProductDetailComponent,
    OrderDetailComponent,
    StockAlertComponent
  ]
})
export class AppModule { }