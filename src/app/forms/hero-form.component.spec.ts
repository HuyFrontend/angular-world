import { TestBed, async } from '@angular/core/testing';

//import { HeroFormComponent } from './hero-form.component';

describe('HeroFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroFormComponent
      ],
    }).compileComponents();
  }));

  it(`should app.powers[0] IS OPTION 12`, async(() => {
    const fixture = TestBed.createComponent(HeroFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.powers[0]).toEqual('Option 12');
  }));

});
