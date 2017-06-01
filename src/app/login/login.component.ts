import { Component } from '@angular/core';
import { Router } from '@angular/router';
import  { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: '../../app/login/login.component.html'
})
export class LoginComponent {
  constructor( private router: Router) {}
  //private password: string = '1234';
  checkLogin(form: NgForm){
    console.log('value', form.value);
    this.router.navigate(['/']);
  }
}
