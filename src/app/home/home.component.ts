import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  template: `<h2> This is home </h2>
    <button (click)="gotoEmployees()">Go to employees</button>
  `
})
export class HomeComponent {
  constructor( private router: Router) {}
  gotoEmployees() {
    this.router.navigate(['employees']);
  }
}
