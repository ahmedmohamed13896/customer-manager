import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginPattern='(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}';

  constructor(private fb:FormBuilder) { }

  loginForm = this.fb.group({
    email: ['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.pattern(this.loginPattern),Validators.minLength(8)]]
  })

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
