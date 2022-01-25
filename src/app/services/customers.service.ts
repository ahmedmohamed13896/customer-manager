import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customerCounter = new BehaviorSubject(0);

  constructor(private http:HttpClient) {

   }

  // Customers
  getCustomers(){
    return this.http.get('http://localhost:3000/customers');
  }
  updateCustomers(id:number,customerData:any){
    return this.http.put('http://localhost:3000/customers/'+id ,customerData);
  }
  addCustomers(customerData:any){
    return this.http.post('http://localhost:3000/customers',customerData);
  }
  deleteCustomers(id:number){
    return this.http.delete('http://localhost:3000/customers/'+id);
  }
  getCustomerInfo(id:number){
    return this.http.get('http://localhost:3000/customers/'+id);
  }
  setCustomerCounter(){
    return this.customerCounter
  }
  getCustomerCounter(){
    return this.customerCounter.getValue()
  }


}
