import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Employee } from './employee.model';

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
        .then(response => response.json().data)
        .catch(this.handleErrorPromise);
    }
    addBookWithPromise(employee: any[]): Promise<any> {
      return this.http.post(this.apiUrl, employee, this.options).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
    }

    getListByObservable(): Observable<any[]> {
      return this.http.get(this.apiUrl)
        .map((response: Response) => response.json());
    }
    getEmployeeObservable(id:number): Observable<any[]> {
      return this.http.get(this.apiUrl + '/' + id)
        .map((response: Response) => response.json());
    }
    // Http.post() - post(url: string, body: any, options?: RequestOptionsArgs) : Observable<Response>
    addEmployeeWithObservable(body: Object): Observable<Employee[]> {
      let bodyString = JSON.stringify(body);

      return this.http.post(this.apiUrl, body, this.options)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }
    removeEmployeeObservable (id:string): Observable<Employee[]> {
      return this.http.delete(`${this.apiUrl}/${id}`)
       .map((res: Response) => res.json())
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}

/*
 // Add a new comment
    addComment (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.commentsUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // Update a comment
    updateComment (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    // Delete a comment
    removeComment (id:string): Observable<Comment[]> {
        return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
   */
