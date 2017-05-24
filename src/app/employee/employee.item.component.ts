
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from './employee.model'
import { EmployeeService } from './employee.service';

import { EmitterService } from '../services/emitter.service';

// Component decorator
@Component({
    selector: 'employee-item',
    template: `
        <div class="panel panel-default">
            <div class="name">{{employee.name}}</div>
            <div class="panel-body">
                {{employee.age}}
            </div>
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editComment()"><span class="glyphicon glyphicon-edit">Edit</span></button>
                <button class="btn btn-danger" (click)="deleteEmployee(employee.id)"><span class="glyphicon glyphicon-remove">Delete</span></button>
            </div>
        </div>
    `
})
// Component class
export class EmployeeItemComponent {
    // Constructor
    constructor(private employeeService: EmployeeService){}
    // Define input properties
    @Input() employee: Employee;

    editComment(){
    }

    deleteEmployee(empID:string){
        this.employeeService.removeEmployeeObservable(empID).subscribe(res => {
            console.log('rés', res);
            location.reload();
            //EmitterService.get(this.listId).emit(res);
        })
    }
 }
/*
editComment(){
        // Emit edit event
        EmitterService.get(this.editId).emit(this.comment);
    }

    deleteComment(id:string){
        // Call removeComment() from CommentService to delete comment
        this.commentService.removeComment(id).subscribe(
                                comments => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(comments);
                                },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
   */
