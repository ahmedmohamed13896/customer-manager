import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  customerCounter = new BehaviorSubject(0);
  isLoggedIn = new BehaviorSubject(false);

  constructor(private http:HttpClient) {
    if(localStorage.getItem('user')){
      this.isLoggedIn.next(true);
    }
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

  // users
  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }
  getUserInfo(id:number){
    return this.http.get('http://localhost:3000/users/'+id);
  }

  addUser(userData:any){
    return this.http.post('http://localhost:3000/users',userData);
  }


}

