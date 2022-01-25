import { CustomersService } from './../../../../services/customers.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  customers !: any[];
  @Input() paginations : any;
  @Input() customersIsLoaded;
  @Input() fullname:string ='';

  constructor(private customersService:CustomersService) {
    console.log(this.customersIsLoaded);
    if(this.customers?.length > 0){
      this.customersIsLoaded = true;
    }
  }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((data:any)=>{
      this.customers = data;
      this.customersIsLoaded = true;
      console.log(this.customersIsLoaded);
    });
    this.customersService.customerCounter.next(0);
  }



}
