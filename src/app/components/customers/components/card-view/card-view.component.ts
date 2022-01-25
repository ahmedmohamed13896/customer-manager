import { CustomersService } from './../../../../services/customers.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit  {
  customers !: any[];
  @Input() paginations : any;
  @Input() customersIsLoaded;
  @Input() fullname:string ='';

  constructor(private customersService:CustomersService) {
    if(this.customers?.length > 0){
      this.customersIsLoaded = true;
    }
  }

  ngOnInit(): void {

    this.customersService.getCustomers().subscribe((data:any)=>{
      this.customers = data;
      this.customersIsLoaded = true;

    });
    this.customersService.customerCounter.next(0);
  }




}
