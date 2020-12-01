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
import { CommentComponent } from './comment/comment.component';
import {MatSelectModule} from '@angular/material/select';
import { CommentfeedComponent } from './commentfeed/commentfeed.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



//import { Message } from './message.model';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SlideshowComponent,
    CommentComponent,
    CommentfeedComponent
    
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
    MatSliderModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [LoggedInGuard, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
