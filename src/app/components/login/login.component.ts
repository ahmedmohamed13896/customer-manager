import { UsersService } from './../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordPattern='(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}';
  userNotFound = false;
  constructor(private fb:FormBuilder,private usersService:UsersService, private router:Router ) { }

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

    this.usersService.getUsers().subscribe((users:any) =>{
      users.forEach((user:any) => {
        if(user.email == currentUser.email && user.password == currentUser.password){
          localStorage.setItem('user',user.email);
          this.usersService.isLoggedIn.next(true);
          this.router.navigate(['/customers']);
        }
        else{
          this.userNotFound =true;
        }
      });
    })
  }
}
