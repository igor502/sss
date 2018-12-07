import {Component, ElementRef, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {AlertService} from '../service/alert.service';
import {HttpErrorResponse} from '@angular/common/http';
import {RoomService} from '../service/room.service';

import {Observable, Subject} from 'rxjs';
import {WebsocketService} from '../service/websocket.service';
import {map} from 'rxjs/operators';
import {ChatService} from '../service/chat.service';
import * as Konva from 'konva';
import * as d3 from 'd3';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scroller') private feedContainer: ElementRef;

  @ViewChild('myCanvas') canvasRef: ElementRef;


  constructor(private chatService: ChatService) {

    /*this.chatmessages = <Subject<any>>wsService
      .connect().pipe(
        map((response: any): any => {
          return response;
        })
      );

    this.sendMsg('test');
*/


  }


  ngOnInit(): void {
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    // Draw the clip path that will mask everything else
    // that we'll draw later.

    // Draw 50,000 circles at random points
    ctx.beginPath();
    // ctx.fillStyle = '#DD0031';
    let x = 80;
    let y = 80;
    // ctx.moveTo(50, 50);
    ctx.arc(x, y, 50, 0, Math.PI * 2);

    ctx.stroke();

  }


  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop
      = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  clicked(event: any) {
    d3.select(event.target).append('circle').attr('cx', event.x).attr('cy', event.y).attr('r', 10).attr('fill', 'red');

  }

  /* sendMsg(msg) {
     this.chatmessages.next(msg);
   }
 */

}
