import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import {AUTH_PROVIDERS} from './auth.service';
import {LoggedInGuard} from './logged-in.guard';
import {MatTabsModule} from '@angular/material/tabs';
import { SlideshowComponent } from './slideshow/slideshow.component';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SlideshowComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatSliderModule
  ],
  providers: [LoggedInGuard, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
