import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamingRoutingModule } from './streaming-routing.module';
import { StreamingComponent } from './streaming.component';

@NgModule({
  imports: [
    CommonModule,
    StreamingRoutingModule
  ],
  declarations: [StreamingComponent]
})
export class StreamingModule { }
