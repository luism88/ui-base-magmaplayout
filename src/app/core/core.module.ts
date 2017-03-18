import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamingService } from './streaming.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:    [ StreamingService ]
})
export class CoreModule { }
