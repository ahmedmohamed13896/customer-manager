import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../../../../services/api.service';

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

  constructor(private api:ApiService) {
    console.log(this.customersIsLoaded);
    if(this.customers?.length > 0){
      this.customersIsLoaded = true;
    }
  }

  ngOnInit(): void {
    this.api.getCustomers().subscribe((data:any)=>{
      this.customers = data;
      this.customersIsLoaded = true;
      console.log(this.customersIsLoaded);
    });
    this.api.customerCounter.next(0);
  }



}
