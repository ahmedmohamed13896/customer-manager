import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  passwordPattern='(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}';
  namePattern="^([a-zA-Z]{3,})?";

  constructor(private fb:FormBuilder,private api:ApiService,private toastr: ToastrService,private router:Router) { }

  registerForm = this.fb.group({
    fName: ['',[Validators.pattern(this.namePattern),Validators.required]],
    lName: ['',[Validators.pattern(this.namePattern),Validators.required]],
    email: ['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.pattern(this.passwordPattern),Validators.minLength(8)]]
  })

  ngOnInit(): void {
  }

  get fName(){
    return this.registerForm.get('fName')
  }
  get lName(){
    return this.registerForm.get('lName')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }

  showSuccess(message:string) {
    this.toastr.success( message);
  }

  register(userData:any){
    this.api.addUser(userData).subscribe((data)=>{
      console.log(data);

    },
    error=>{
      console.log(error);
    },()=>{
      // show toaster
      this.showSuccess('User Registered Successfully');
      this.router.navigate(['/login']);
    })
  }

}
