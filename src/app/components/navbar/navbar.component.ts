import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  brandUrl = "./assets/customers.png";

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
     this.usersService.isLoggedIn.subscribe(value=>{
        this.isLoggedIn = value;
     })
  }

  logout(){
    localStorage.removeItem('user');
    this.usersService.isLoggedIn.next(false);
  }

}
