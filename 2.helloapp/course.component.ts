import {Component} from '@angular/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {NewCourseDirective} from './add-new-course.directive';

@Component({
  selector: 'courses',
  template: `
    <h1>{{ title }}</h1>
    <h2>Courses</h2>
    <input type="text" autoGrow />
    <button type="text" addNewCourse>Add</button>
    <ul>
      <li *ngFor="#course of courses">
      {{ course }}
      </li>
    </ul>
  `,
  providers: [CourseService],
  directives: [AutoGrowDirective, NewCourseDirective]
})

export class CoursesComponent {
  title = 'Angular Directive';
  //courses = ['1', '2', '3'];
  // use service
  courses;
  constructor (courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
  //fruits = ['Apple', 'Orange'];
}
