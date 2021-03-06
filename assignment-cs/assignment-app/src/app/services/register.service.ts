import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../model/assignment.model';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:8010/api/auth/register';


  validateRegister(user: User): Observable<any>{
    return this.http.post(this.uri ,{
        name : user.name,
        email : user.email,
        password : user.password
    })
}

  log(assignment:Assignment, action:string) {
    console.log("Register Service: " + assignment.titre + " " + action);
  }
}
