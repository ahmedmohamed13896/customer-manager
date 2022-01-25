import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isLoggedIn = new BehaviorSubject(false);

  constructor(private http:HttpClient) {
    if(localStorage.getItem('user')){
      this.isLoggedIn.next(true);
    }
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
