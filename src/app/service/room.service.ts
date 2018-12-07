import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models';

@Injectable()
export class RoomService {


  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get('http://localhost:8080/rooms');
  }


  getRandom() {

    return this.http.get('http://localhost:8080/rooms');

  }
}
