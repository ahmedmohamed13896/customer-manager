import { Component, Input, OnInit,Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent {
  action!:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationPopupComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  getClassName(){
    if(this.local_data.message == 'Delete'){
      return 'btn btn-danger'
    }else if(this.local_data.message =='Update'){
      return 'btn btn-success'
    }else if(this.local_data.message =='Add'){
    return 'btn btn-primary'
    }
    return 'btn btn-light'
  }

}
