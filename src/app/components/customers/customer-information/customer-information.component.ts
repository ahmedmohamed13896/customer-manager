import { ApiService } from './../../../services/api.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent implements OnInit {
  faUser= faUser;
  id='';
  customerInfo: any;


  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id= param.id;
    })
    this.api.getCustomerInfo(this.id).subscribe((info)=>{
      this.customerInfo = info;
    })
  }

}
