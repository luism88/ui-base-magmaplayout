import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class StreamingService {
  private url = 'http://localhost:3000';  
  private socket;
  constructor (){
     this.socket = io(this.url);
  }
  /**
   * Send stream to server
   * 
   */
  emitStream(stream){
    this.socket.emit('stream-emit', stream);    
  }
  
  /**
   * get stream broadcasting from server
   */
  getStream() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('stream-broadcast', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}