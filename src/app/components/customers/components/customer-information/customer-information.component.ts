import { CustomersService } from './../../../../services/customers.service';
import { faList, faUser } from '@fortawesome/free-solid-svg-icons';
import {   Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent implements OnInit  {
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

  routeSub!: Subscription
  customerSub!: Subscription


  constructor(private CustomersService:CustomersService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param=>{
      this.id= param.id;
    })
   this.customerSub = this.CustomersService.getCustomerInfo(this.id).subscribe((info)=>{
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.routeSub.unsubscribe();
    this.customerSub.unsubscribe();
  }



}
