import { ApiService } from './../../../../services/api.service';
import { faList, faUser } from '@fortawesome/free-solid-svg-icons';
import {   Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {
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

  constructor(private api:ApiService,private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id= param.id;
    })
    this.api.getCustomerInfo(this.id).subscribe((info)=>{
      this.customerInfo = info;
      this.totalOrdersPrice = this.getTotalPrice();
    })
  }

  getTotalPrice(){
    let totalPrice=0;
    if(this.customerInfo?.orders?.length){
      for(let order of this.customerInfo?.orders){
        totalPrice += order.price;
      }
      totalPrice = +totalPrice.toFixed(2);
      return totalPrice;
    }
    return 0;
  }
}
