import {Injectable} from '@angular/core';
@Injectable()
export class LoginService {
  public isLoggedIn: boolean;
  constructor(argument) {
    // code...
  }
  isLogged(): boolean{
  	return this.isLoggedIn;
  }
  setLogin (isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

}
