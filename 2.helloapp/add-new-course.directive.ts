import { Directive, ElementRef, Renderer } from 'angular2/core';
import  {CoursesComponent} from './course.component';


@Directive ({
  selector: '[addNewCourse]',
  host: {
    '(click)': 'onClick()'
  }
})
export class NewCourseDirective {
  constructor (private el: ElementRef, private renderer: Renderer) {
  }
  onClick() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    console.log('create new course');
    //CoursesComponent.apply(course)
  }
}
