import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCustomers(){
    return this.http.get('https://my-json-server.typicode.com/ahmedmohamed13896/fake_api/customers');
  }

  updateCustomers(id:number,customerData:any){
    return this.http.put('https://my-json-server.typicode.com/ahmedmohamed13896/fake_api/customers/'+id ,customerData);
  }

  addCustomers(customerData:any){
    return this.http.post('https://my-json-server.typicode.com/ahmedmohamed13896/fake_api/customers',customerData);
  }

  deleteCustomers(id:number){
    return this.http.delete('https://my-json-server.typicode.com/ahmedmohamed13896/fake_api/customers/'+id);
  }


  getCustomerInfo(id:number){
    return this.http.get('https://my-json-server.typicode.com/ahmedmohamed13896/fake_api/customers/'+id);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }



}

function catchError(arg0: any): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error(arg0);
}

