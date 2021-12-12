import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() customers !: any[];
  @Input() paginations : any;
  faEdit= faEdit;

  constructor() { }

  ngOnInit(): void {

  }

}
