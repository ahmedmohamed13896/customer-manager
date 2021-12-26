import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  editForm = this.fb.group({
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required]
  });
  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
  }

}
