import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamRoutingModule } from './webcam-routing.module';
import { WebCamComponent } from './webcam.component';

@NgModule({
  imports: [
    CommonModule,
    WebcamRoutingModule
  ],
  declarations: [WebCamComponent]
})
export class WebcamModule { }
