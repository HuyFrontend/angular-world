import { Component, OnInit } from 'angular2/core';
import { EmployeeService } from './service/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './app/employee/views/employee.component.html'
})

export class EmployeeListComponent implements OnInit {
    public employeeList: any[];
    constructor (private employeeService: EmployeeService) {

    }
    ngOnInit() {
        //this.employeeService.getList() return a Observable
        let empListObser = this.employeeService.getList();
        let list: any = empListObser.subscribe((res: any) => res);
        this.employeeList = list;
    }
}

