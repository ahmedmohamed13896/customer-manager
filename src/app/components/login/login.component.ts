import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordPattern='(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}';
  userNotFound = false;
  constructor(private fb:FormBuilder,private api:ApiService, private router:Router ) { }

  loginForm = this.fb.group({
    email: ['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.pattern(this.passwordPattern),Validators.minLength(8)]]
  })

  ngOnInit(): void {
  }


  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }


  login(currentUser:any){

    this.api.getUsers().subscribe((users:any) =>{
      users.forEach((user:any) => {
        if(user.email == currentUser.email && user.password == currentUser.password){
          localStorage.setItem('user',user.email);
          this.api.isLoggedIn.next(true);
          this.router.navigate(['/customers']);
        }
        else{
          this.userNotFound =true;
        }
      });
    })
  }
}
