import { Component } from 'angular2/core';
import { CoursesComponent } from './course.component';
import { TeamsComponent } from './team.component';



@Component({
  selector: 'my-app',
  // template: `<h1 class="hello">Hello</h1>
  //   <courses></courses>
  //   <teams><teams>`,
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [CoursesComponent, TeamsComponent]
})

export class AppComponent {
  employee = {
    name:'Le Hui'
  }
  fruits = ['banana', 'lemon'];
}
