import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  brandUrl = "./assets/customers.png";

  constructor(private api:ApiService) { }

  ngOnInit(): void {
     this.api.isLoggedIn.subscribe(value=>{
        this.isLoggedIn = value;
     })
  }

  logout(){
    localStorage.removeItem('user');
    this.api.isLoggedIn.next(false);
  }

}
