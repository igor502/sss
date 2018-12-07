import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {AlertService} from '../service/alert.service';
import {first} from 'rxjs/operators';
import {register} from 'ts-node';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Httperrormodel} from '../_models/httperrormodel';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });


  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  get user(): any {

    return localStorage.getItem('User');
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(
      data => {
        console.log('tis gelukt we');
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
        // this.router.navigate(['/login']);
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          console.log(error);

        }

        const errorMessage = JSON.stringify(error);

        this.alertService.error(error);
        this.loading = false;
      });
  }

  // .pipe(first())

}
