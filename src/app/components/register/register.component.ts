import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  passwordPattern='(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}';
  namePattern="^([a-zA-Z]{3,})?";

  constructor(private fb:FormBuilder) { }

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

}
