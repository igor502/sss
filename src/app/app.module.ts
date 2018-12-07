import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {UserService} from './service/user.service';
import {routing} from './app.routing';
import {RegisterComponent} from './register/register.component';
import {AlertComponent} from './_directives';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './service/alert.service';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {LoginComponent} from './login/login.component';
import {RoomoverviewComponent} from './rooms/roomoverview.component';
import {RoomService} from './service/room.service';
import {ChatComponent} from './chat/chat.component';
import {WebsocketService} from './service/websocket.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import {ChatService} from './service/chat.service';
import {ChatFormComponent} from './chat-form/chat-form.component';
import {FormsModule} from '@angular/forms';
import {FeedComponent} from './feed/feed.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent,
    LoginComponent,
    RoomoverviewComponent,
    ChatComponent,
    ChatFormComponent,
    FeedComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule


  ],
  providers: [
    UserService,
    AlertService,
    RoomService,
    WebsocketService,
    ChatService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
