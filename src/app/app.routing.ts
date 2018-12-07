import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RoomoverviewComponent} from './rooms/roomoverview.component';
import {ChatComponent} from './chat/chat.component';



const appRoutes: Routes = [
  {path: '', component: RegisterComponent, pathMatch: 'full'},
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'rooms',
    component: RoomoverviewComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
