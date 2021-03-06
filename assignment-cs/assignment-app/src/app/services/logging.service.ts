import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../model/assignment.model';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:8010/api/auth/login';


  validateLogin(user: User): Observable<any>{
    return this.http.post(this.uri ,{
        email : user.email,
        password : user.password
    })
}

  log(assignment:Assignment, action:string) {
    console.log("Logging Service: " + assignment.titre + " " + action);
  }
}
