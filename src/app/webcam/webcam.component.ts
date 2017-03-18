import {Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { StreamingService } from '../core/streaming.service';

@Component({
    moduleId: module.id,
    selector: 'webcam-component',
    templateUrl: 'webcam.component.html',
    styleUrls: ['webcam.component.css'],
    providers: [StreamingService]
   
})
export class WebCamComponent implements OnInit {
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
        
        //  object Type 'navigator';
        let nav = <any>navigator;

        // 2. Adjust for all browsers
        nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;

       
        // 3, see http://stackoverflow.com/questions/32645724/angular2-cant-set-video-src-from-navigator-getusermedia for credits
        var promise = new Promise<string>((resolve, reject) => {
            nav.getUserMedia({video: true}, (stream) => {
                resolve(stream);
            }, (err) => reject(err));
        }).then((stream) => {
            let webcamUrl = URL.createObjectURL(stream);
            this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
            
            // Escribir aca la logica del streaming.
          
            this.streamingService.emitStream(webcamUrl);

        }).catch((error) => {
            console.log(error);
        });
        
    }
}
