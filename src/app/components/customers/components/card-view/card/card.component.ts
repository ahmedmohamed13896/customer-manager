import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../../../../../services/api.service';
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

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  changeCounter(event:Event){
    if((event.target as HTMLInputElement).checked){
      this.isChecked =true;
      this.counter = this.api.getCustomerCounter();
      this.api.setCustomerCounter().next(this.counter+1)
    }else{
      this.isChecked =false;
      this.counter = this.api.getCustomerCounter();
      this.api.setCustomerCounter().next(this.counter-1)
    }
  }

}
