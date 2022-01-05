import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() customers !: any[];
  @Input() paginations : any;
  totalOrder :number= 0;
  @Input() customersIsLoaded;

  constructor() {
    console.log(this.customersIsLoaded);
    if(this.customers?.length > 0){
      this.customersIsLoaded = true;
      console.log(this.customersIsLoaded);
    }
  }

  ngOnInit(): void {
  }

}
