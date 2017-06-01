import {Injectable} from '@angular/core';
@Injectable()
export class LoginService {
  public isLoggedIn: boolean;
  constructor(argument) {
    // code...
  }
  setLogin (isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
