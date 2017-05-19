import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'two-way-binding',
  template: `
    <h1>{{title}}</h1>
    <div>
      <p>
        Count: {{ count }} -
        <button (click)="increment()">{{btnName}}</button>
      </p>
    </div>
  `
})

export class TwowayComponent {
  title = 'Two way binding in angular';
  btnName: string = 'Click me';
  @Input() count = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter();
  increment() {
    this.count++;
    //
    //this.countChange.emit(this.count);
  }
}
