import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebCamComponent,  } from './webcam.component'; 

const WebcamRoutes: Routes = [
  {
    path: 'webcam',
    component: WebCamComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(WebcamRoutes)],
  exports: [RouterModule]
})
export class WebcamRoutingModule { }
