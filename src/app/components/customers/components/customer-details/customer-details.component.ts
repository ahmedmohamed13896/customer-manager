import { CustomersService } from './../../../../services/customers.service';
import { faList, faUser } from '@fortawesome/free-solid-svg-icons';
import {   Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  faUser= faUser;
  id!:number;
  customerInfo: any;
  totalOrdersPrice:number = 0;
  // Customer Info tabs
  tabs = [
    {id:1, name :"Customer Details",icon: faList},
    {id:2,name :"Customer Orders",icon:  faList},
    {id:3,name :"Edit Customer",icon: faList},
  ];
  counter:number = this.tabs.length + 1;
  active !:string;

  constructor(private customersService:CustomersService,private route:ActivatedRoute) {

   }
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id= param.id;
    })
    this.customersService.getCustomerInfo(this.id).subscribe((info)=>{
      this.customerInfo = info;
    })
  }

}
