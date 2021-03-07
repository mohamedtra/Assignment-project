import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoggingService } from 'src/app/services/logging.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user : User;

  constructor(private formBuilder: FormBuilder, private loginService: LoggingService, private router:Router,) {
   }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitLoginForm() {

    console.log(this.loginForm.value);
    this.user = this.loginForm.value;
    if(this.user.email && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
      console.log('result is ', result);
      // Stocker le token dans la session du navigateur
      localStorage.setItem('token',result.token);
      console.log('token ', localStorage.getItem('token'));
    }, error => {
      console.log('error is ', error);
    });
    this.router.navigate(["/home"]);
    } else {
      alert('enter user name and password');
    }
  }
}
