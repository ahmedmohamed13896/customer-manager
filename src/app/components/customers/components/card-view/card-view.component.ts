import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../../../../services/api.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  customers !: any[];
  @Input() paginations : any;
  faEdit= faEdit;
  @Input() customersIsLoaded;

  constructor(private api:ApiService) {
    if(this.customers?.length > 0){
      this.customersIsLoaded = true;
    }
  }

  ngOnInit(): void {
    this.api.getCustomers().subscribe((data:any)=>{
      this.customers = data;
      this.customersIsLoaded = true;
      console.log(this.customersIsLoaded);
    })
  }


}
