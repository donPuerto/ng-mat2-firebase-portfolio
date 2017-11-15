import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  
  MatButtonModule, 
  MatToolbarModule, 
  MatInputModule, 
  MatProgressSpinnerModule , 
  MatCardModule, 
  MatIconModule, 
  MatMenuModule ,
  MatTabsModule,
  MatGridListModule,
  MatListModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
