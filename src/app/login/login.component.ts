import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {AlertService} from '../service/alert.service';
import * as jwt_decode from 'jwt-decode';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private alertService: AlertService) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  get user() {

    return sessionStorage.getItem('user');

  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.login(this.f.username.value, this.f.password.value).subscribe(
      token => {
        console.log(jwt_decode(token).sub);
        this.alertService.success('yay ge zijt ingelogd');
        console.log(this.user);
        sessionStorage.setItem('user', jwt_decode(token).sub);
        this.router.navigate(['/rooms']);

      },
      error => {
        console.log(error);
        this.alertService.error(error);
        this.loading = false;
      });


  }

}
