import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { WebcamModule } from './webcam/webcam.module';
import { StreamingModule } from './streaming/streaming.module';

/* Routing Module */


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,  
    AlertModule.forRoot(),
    DashboardModule, 
    LoginModule,
    WebcamModule,
    StreamingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
