import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Assignment } from '../model/assignment.model';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient) { }

  uriLogin = 'http://localhost:8010/api/auth/login';
  uriLogout = 'http://localhost:8010/api/auth/logout';
  headers = new HttpHeaders({'x-access-token': localStorage.getItem('token')});



  validateLogin(user: User): Observable<any>{
    return this.http.post(this.uriLogin ,{
        email : user.email,
        password : user.password
    })  
}

// Déconnection
LogOut() : Observable<any>{
  return this.http.get(this.uriLogout , {headers: this.headers});
}

  log(assignment:Assignment, action:string) {
    console.log("Logging Service: " + assignment.titre + " " + action);
  }
}
