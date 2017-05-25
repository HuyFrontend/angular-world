import { Component } from '@angular/core';
import { Hero }    from './hero';
@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.html',
  styleUrls: [
    './hero-form.css'
  ]
})
export class HeroFormComponent {
  powers = [ 'Option 1', 'Option 2', 'Option 3', 'Option 4' ];
  model = new Hero(18, 'Huy Vo', this.powers[0], 'Chuck Overstreet');
  //model = new Hero(18, 'Dr IQ', this.powers[0]);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }
  get diagnostic() {
    //return JSON.stringify(this.model);
    return 'vo xuan huy';
  }
  get FirstName(): string {
    console.log("Get FirstName : ", this.model.name);
    return this.model.name;
  }
}
