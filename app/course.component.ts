import {Component} from 'angular2/core';
import {CourseService} from './course.service'

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <ul>
      <li *ngFor="#course of courses">
      {{ course }}
      </li>
    </ul>
  `,
  providers: [CourseService]
})

export class CoursesComponent {
  title = 'The title of course Page';
  //courses = ['1', '2', '3'];
  // use service
  courses;
  constructor (courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
