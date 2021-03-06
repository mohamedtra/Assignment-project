import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user : User;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {
   }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitRegisterForm() {

    console.log(this.registerForm.value);
    this.user = this.registerForm.value;
    if(this.user.name && this.user.email && this.user.password) {
      this.registerService.validateRegister(this.user).subscribe(result => {
      console.log('result is ', result);
      // Stocker le token dans la session du navigateur
      localStorage.setItem('token',result.token);
      console.log('token ', localStorage.getItem('token'));
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('enter user name and password');
    }
  }
}
