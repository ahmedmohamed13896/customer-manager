import { ApiService } from './../../../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  namePattern='[a-zA-Z]*';
  id!:number;
  customerInfo!:any;

  editForm = this.fb.group({
    first_name:['',[Validators.required,Validators.pattern(this.namePattern),Validators.minLength(3),Validators.maxLength(10)]],
    last_name:['',[Validators.required,Validators.pattern(this.namePattern),Validators.minLength(3),Validators.maxLength(10)]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private apiService:ApiService,
    private route :ActivatedRoute,
    private router :Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id= param.id;
    })
    this.apiService.getCustomerInfo(this.id).subscribe((info)=>{
      this.customerInfo = info;
      this.editForm.patchValue({
        first_name: this.customerInfo.first_name,
        last_name: this.customerInfo.last_name,
        address: this.customerInfo.address,
        city: this.customerInfo.city,
        state: this.customerInfo.state,
      });
    })
  }

  get first_name(){
    return this.editForm.get('first_name')
  }

  get last_name(){
    return this.editForm.get('last_name')
  }
  get address(){
    return this.editForm.get('address')
  }

  get city(){
    return this.editForm.get('city')
  }

  get state(){
    return this.editForm.get('state')
  }

  updateCustomer(){
    this.customerInfo = {...this.customerInfo,...this.editForm?.value};
    this.apiService.updateCustomers(this.id, this.customerInfo).subscribe(res=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    },
    ()=>{
      // show toaster
      this.showSuccess('Customer Updated Successfully')
    });

  }


  deleteCustomers(){
    this.apiService.deleteCustomers(this.id).subscribe((res)=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    },
    ()=>{
      // show toaster
      this.showSuccess('Customer deleted Successfully');
      this.router.navigate(['customers']);
    });
  }


  showSuccess(message:string) {
    this.toastr.success( message);
  }

}
