import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import  { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
    selector:'employee-detail',
    templateUrl: './employee.detail.component.html'
})
export class EmployeeDetailComponent implements OnInit, OnDestroy{
    public id: number;
    public subcription: Subscription;
    public employee: Employee;
    private initEmployee: Employee = {
        id: 123,
        name: 'Huy',
        age: 30,
        phone: '0942404202'

    };

    constructor(private router: Router, private activated: ActivatedRoute, private employeeService: EmployeeService) {}
    getEmployee(id: number) {
        var that = this;

        this.employeeService.getEmployeeObservable(id).subscribe((res: any) => {
            this.employee = res;
            console.log('this employee', this.employee);
        }, error => {
            console.log('API Error');
        });
    }

    ngOnInit() {

        this.employee = this.initEmployee;

        // this.subcription = this.activated.params.subscribe(params => {
        //     this.id = params['id'];
        //     console.log(this.id);
        // });

        //this.getEmployee(this.id);
    }
    ngOnDestroy(){
        //this.subcription.unsubscribe();
    }
}
