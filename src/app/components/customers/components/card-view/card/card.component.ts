import { CustomersService } from './../../../../../services/customers.service';
import { Component, Input, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  counter!:number;
  isChecked:boolean =false;
  faEdit= faEdit;
  @Input() customer!:any;

  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
  }

  changeCounter(event:Event){
    if((event.target as HTMLInputElement).checked){
      this.customer.isChecked =true;
      this.counter = this.customersService.getCustomerCounter();
      this.customersService.setCustomerCounter().next(this.counter+1)
    }else{
      this.customer.isChecked =false;
      this.counter = this.customersService.getCustomerCounter();
      this.customersService.setCustomerCounter().next(this.counter-1)
    }
  }


}
