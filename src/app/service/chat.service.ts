import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {WebsocketService} from './websocket.service';

@Injectable()
export class ChatService {


  chatmessages: Subject<any>;


  constructor(private http: HttpClient, private wsService: WebsocketService) {

    this.chatmessages = <Subject<any>>wsService
      .connect().pipe(
        map((response: any): any => {
          return response;
        })
      );

    this.sendMsg('test');
    this.sendMsg('ggfgt');

    this.chatmessages.subscribe(chatmessage => console.log(chatmessage));
    this.chatmessages.asObservable().subscribe(message => console.log('lol'));
  }

  getMessages() {

    return this.chatmessages.asObservable();

  }


  sendMsg(message) {

    this.chatmessages.next(message);


  }


}
