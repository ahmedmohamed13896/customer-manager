import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { faUser, faThLarge ,faBars, faMapMarkedAlt,faPlus ,faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  faUser = faUser;
  faThLarge = faThLarge;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPlus = faPlus;
  faEdit = faEdit;
  // tabs
  tabs = [
    {id:1, name :"Card View",icon: faThLarge},
    {id:2,name :"List View",icon:  faBars},
    {id:3,name :"Map view",icon: faMapMarkedAlt},
    {id:4,name :"New Customer",icon: faPlus}
  ];
  counter:number = this.tabs.length + 1;
  active !:string;

  // customers Data
  customers: any[]= [];
  fullname:string = '';

  // pagination
  paginations = {
    cards:{
      page : 0,
      pageSize : 12
    },
    table:{
      page : 0,
      pageSize : 8
    }
  }

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCustomers().subscribe((data:any)=>{
      this.customers = data;
      console.log(this.customers);
    },
    error =>{
      console.log(error);
    });
  }





}
