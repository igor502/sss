import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {AlertService} from '../service/alert.service';
import {HttpErrorResponse} from '@angular/common/http';
import {RoomService} from '../service/room.service';

@Component({
  selector: 'app-roomoverview',
  templateUrl: './roomoverview.component.html',
  styleUrls: ['./roomoverview.component.css']
})
export class RoomoverviewComponent implements OnInit {

  private roomslist;


  constructor(
    private router: Router,
    private roomService: RoomService,
  ) {
  }


  ngOnInit(): void {

    this.roomService.getAll().subscribe(rooms => this.roomslist = rooms);


  }

  joinRoom(id: number) {


  }


}
