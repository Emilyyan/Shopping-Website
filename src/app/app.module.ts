import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NavbarComponent } from './navbar/navbar.component';

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
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavbarComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
