import {Component, OnInit, OnChanges} from '@angular/core';
import {ChatService} from '../service/chat.service';
import {Observable} from 'rxjs/Observable';
import {Message} from '../_models/message';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  messages = [];

  constructor(private chat: ChatService) {
  }

  ngOnInit() {
    this.chat.getMessages().subscribe(message => this.messages.push(message));

  }


}
