import {Component, OnInit, ElementRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { StreamingService } from '../core/streaming.service';


@Component({
    moduleId: module.id,
    selector: 'streaming-component',
    templateUrl: 'streaming.component.html',
    styleUrls: ['streaming.component.css'],
    providers: [StreamingService]
})


export class StreamingComponent implements OnInit {
    videosrc : any;
    
    constructor(
                private streamingService:StreamingService,
                private sanitizer:DomSanitizer,
                private element:ElementRef
                ) {
    }
    
    ngOnInit() {
        this.showCam();
    }

    private showCam() {
        
       this.streamingService.getStream().subscribe( data  => {
         
            console.log(this.sanitizer.bypassSecurityTrustResourceUrl(data.toString()));
            this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.toString());
        })
        
        
    }
}
