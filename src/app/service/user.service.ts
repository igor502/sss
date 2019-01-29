import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import {User} from '../_models';
import {BehaviorSubject, config, Observable, ObservableInput} from 'rxjs';

@Injectable()
export class UserService {

  loggedin = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  login(userIdentifier: String, password: String) {

    return this.http.post('http://localhost:8080/users/signin', {userIdentifier, password}, {responseType: 'text'});
    console.log("test");

  }

  getAllImages() {
    return this.http.get('http://localhost:8080/images');
  }

  getById(id: number) {
    return;
  }

  register(user: User) {
    console.log(user);
    return this.http.post('http://localhost:8080/users/save', user, {responseType: 'text'});

  }

  update(user: User) {
    return;
  }

  delete(id: number) {
    return;
  }
}
