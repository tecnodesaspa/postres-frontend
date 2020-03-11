import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThousandsPipe } from './pipes/thousands.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThousandsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
