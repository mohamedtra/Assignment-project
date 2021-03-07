import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;

  constructor() { }

  logIn() {
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin():Promise<any> {
    const isUserAdmin = new Promise((resolve) => {
      resolve(this.loggedIn);
    });

    return isUserAdmin;
    }
}
