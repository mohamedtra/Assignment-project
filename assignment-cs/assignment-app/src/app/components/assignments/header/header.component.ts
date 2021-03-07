import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'ASSIGNMENT';
  isLoggedIn = false;

  constructor(private router: Router , private loginService: LoggingService) { }

  ngOnInit() {
  }
  logOut() {
      this.loginService.LogOut().subscribe(result => {
        console.log('result is ', result);
        // recupère le token dans la session du navigateur
        localStorage.removeItem('token');
        console.log("Token suprimé : ", localStorage.getItem('token'))
      }, error => {
        console.log('error is ', error);
      });
      this.router.navigate(["/login"]);
      
  }

 

}
