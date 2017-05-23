import { Component, OnInit , OnChanges} from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit, OnChanges {
    //testing
    public employeeList: any[] = [{ age: 20, name: 'The', phone: '093 1230321'}];
    errorMessage: string;
    constructor (private employeeService: EmployeeService) {

    }
    ngOnInit() {
        console.log('this.employeeList',this.employeeList);
        var that = this;
        //this.employeeList = this.employeeService.getListArray();

        this.employeeService.getListByObservable().subscribe((res: any) => {
            this.employeeList = res;
        }, error => {
            console.log('API Error');
        });

        // get data by Observable
        // this.employeeService.getListByPromise().then(emp => {
        //     this.employeeList = emp;
        // },error => {
        //     this.errorMessage = <any>error;
        // })
    }
    ngOnChanges() {
        console.log('this.employeeList3',this.employeeList);
    }
}
