import {Injectable} from 'angular2/core';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeeService {
    private apiUrl: string = 'http://592302f2b7479000115c433f.mockapi.io/api/v1/employees';
    constructor(private http: Http) {
    }
    getList(): Observable<any[]> {
        //return this.http.get(this.apiUrl).map((response: Response) => response.json());
        let empObj = this.http.get(this.apiUrl);
        let empMap = empObj.map((res: Response) => res.json());
        return empMap;
    }
}
