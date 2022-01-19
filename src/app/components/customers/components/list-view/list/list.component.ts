import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../../../../../services/api.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '.app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 constructor(private api:ApiService) { }
  counter!:number;
  isChecked:boolean =false;
  faEdit= faEdit;
  @Input() customer!:any;
  totalOrder :number= 0;

  ngOnInit(): void {
  }

   changeCounter(event:Event){
    if((event.target as HTMLInputElement).checked){
      this.customer.isChecked =true;
      this.counter = this.api.getCustomerCounter();
      this.api.setCustomerCounter().next(this.counter+1)
    }else{
      this.customer.isChecked =false;
      this.counter = this.api.getCustomerCounter();
      this.api.setCustomerCounter().next(this.counter-1)
    }
  }
}
