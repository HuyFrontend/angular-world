import { Component, OnInit , OnChanges, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';


@Component({
    selector: 'employee-list',
    //templateUrl: './employee.component.html'
    template: `
        <employee-item *ngFor="let emp of employeeList" [employee]="emp"></employee-item>
        <button class="add-new">Add new</button>
    `,
})

export class EmployeeComponent implements OnInit, OnChanges {
    //testing
    //public employeeList: any[] = [{ age: 20, name: 'The', phone: '093 1230321'}];
    public employeeList: Employee[];
    errorMessage: string;
    //@Input() editId: string;

    constructor (private employeeService: EmployeeService) {

    }
    loadEmployees() {
        var that = this;
        //this.employeeList = this.employeeService.getListArray();
        // this.employeeService.getListByObservable().subscribe((res: any) => {
        //     this.employeeList = res;
        // }, error => {
        //     console.log('API Error');
        // });

        this.employeeService.getListByPromise()
            .then( res => {
                this.employeeList = res;
                console.log('success');
            }, error => {
                this.errorMessage = <any>error;
                console.log('error');
            });
    }

    // init component
    ngOnInit() {
        this.loadEmployees();
    }
    ngOnChanges() {
        console.log('this.employeeList3',this.employeeList);
    }

    addEmployee(empID:string){
        this.employeeService.removeEmployeeObservable(empID).subscribe(res => {
            console.log('rés', res);
            location.reload();
            //EmitterService.get(this.listId).emit(res);
        })
    }
}
