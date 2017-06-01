import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'employee-overview',
  template: `<h3> This is Overview </h3>
  `
})
export class EmployeeOverviewComponent implements OnInit, OnDestroy {
  public parentRouterID: number;
  public sub: Subscription;
  constructor(private router: Router, private activated: ActivatedRoute) {}
  getParentRouteID() {
    this.sub = this.activated.parent.params.subscribe(params => {
      this.parentRouterID = params.id;
      console.log('this.parentRouterID', this.parentRouterID);
    });
  }

  ngOnInit() {
    this.getParentRouteID();
  }
  ngOnDestroy(){
    if (this.sub) {
      console.log('Unscrible', this.sub);
      this.sub.unsubscribe();
    }
  }
}

