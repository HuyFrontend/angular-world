import { Directive, ElementRef, Renderer } from 'angular2/core';

@Directive ({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {
  constructor (private el: ElementRef, private renderer: Renderer) {
  }
  onFocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    console.log('on focus');
    var getFullName = (firstName: string, lastName: string): string => {
     return firstName + ' '  + lastName;
    }
    var checkName = function(inputFunction: (first: string, last: string) => string) {
        var name = inputFunction('Huy', 'Xuan');
        console.log( name );
    };
    checkName(getFullName);
  }
  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    console.log('on blur');
  }
}
