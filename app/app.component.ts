import { Component } from 'angular2/core'
import {CoursesComponent} from './course.component'


@Component({
  selector: 'my-app',
  template: '<h1> Hello </h1><courses></courses>',
  directives: [CoursesComponent]
})

export class AppComponent {}
