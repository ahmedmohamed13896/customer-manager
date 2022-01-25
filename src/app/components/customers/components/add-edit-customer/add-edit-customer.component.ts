import { CustomersService } from './../../../../services/customers.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit {
  @Input() formType:string ="edit";
  namePattern='[a-zA-Z]*';
  id!:number;
  customerInfo!:any;
  @Input() nav:any;

  editForm = this.fb.group({
    first_name:['',[Validators.required,Validators.pattern(this.namePattern),Validators.minLength(3),Validators.maxLength(10)]],
    last_name:['',[Validators.required,Validators.pattern(this.namePattern),Validators.minLength(3),Validators.maxLength(10)]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]]
  });


  // @ViewChild(ConfirmationPopupComponent,{static:true}) ConfirmationPopup:any;

  constructor(
    private fb: FormBuilder,
    private customersService:CustomersService,
    private route :ActivatedRoute,
    private router :Router,
    private toastr: ToastrService,
    public dialog: MatDialog
    ) {}


  ngOnInit(): void {
    if(this.formType == 'edit'){
      this.route.params.subscribe(param=>{
        this.id= param?.id;
      })
      this.customersService.getCustomerInfo(this.id).subscribe((info)=>{
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
    this.customersService.updateCustomers(this.id, this.customerInfo).subscribe(res=>{
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
    this.customersService.deleteCustomers(this.id).subscribe((res)=>{
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


  addCustomers(){
    this.customersService.addCustomers(this.editForm.value).subscribe(res=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    },
    ()=>{
      // show toaster
      this.showSuccess('Customer Added Successfully');
      this.nav.select(2);
    });
  }


  showSuccess(message:string) {
    this.toastr.success( message);
  }

  openDialog(action:any,obj:any) {
    obj.action = action;
    console.log(obj);

    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result?.event == 'Update' && result?.event){
        this.updateCustomer();
      }else if(result?.event == 'Delete'  && result?.event ){
        this.deleteCustomers();
      }
      else if(result?.event == 'Add'  && result?.event ){
        this.addCustomers();
      }
      else{
        this.dialog.closeAll();
      }
    });
  }




}
