import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {NewCourseDirective} from './add-new-course.directive';

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
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
  title = 'New course';
  //courses = ['1', '2', '3'];
  // use service
  courses;
  constructor (courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
  //fruits = ['Apple', 'Orange'];
}
