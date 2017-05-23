import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeeService {
    private apiUrl: string = 'http://592302f2b7479000115c433f.mockapi.io/api/v1/employees';
    headers: Headers;
    options: RequestOptions;

    private extractData(res: Response) {
      let body = res.json();
      return body.data || {};
    }

    private handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }

    private handleErrorPromise (error: Response | any) {
      console.error(error.message || error);
      return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {
      this.headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
      this.options = new RequestOptions({ headers: this.headers });
    }

    getListArray(): any[] {
      let employees: any[] = [
        {name: 'Huy', age: 30, phone: '0942 404 202'},
        {name: 'Hoang', age: 20, phone: '0933 713 723'}
      ];
      return employees;
    }

    getListByPromise(): Promise<any[]> {
      return this.http
        .get(this.apiUrl).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }
    addBookWithPromise(employee: any[]): Promise<any> {
      return this.http.post(this.apiUrl, employee, this.options).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    getListByObservable(): Observable<any[]> {
      return this.http
        .get(this.apiUrl)
        .map((response: Response) => response.json());
    }
    // Http.post() - post(url: string, body: any, options?: RequestOptionsArgs) : Observable<Response>
    addEmployeeWithObservable(employee: any[]): Observable<any[]> {
      return this.http
        .post(this.apiUrl, employee, this.options)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

}
