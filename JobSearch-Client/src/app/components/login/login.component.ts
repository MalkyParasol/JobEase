import { Component, NgModule, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { jobFields } from '../../models/fields';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup | null = null;

  constructor(private loginService: LoginService,private router:Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^\S+$/),
      ]),
    });
  }

  login() {
    if (this.loginForm?.valid)
    {
      this.loginService.checkUser(this.loginForm.controls['name'].value ,this.loginForm.controls['password'].value)
      .subscribe(user=>{
        if(user){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['']);
        }
        else{
          alert("Invalid username or password!");
        }

      })
    }
    else
    {
      if(this.loginForm?.controls['name'].value == "")
        alert("name required!");
      else{
        const passwordErros = this.loginForm?.get('password')?.errors; 
        if(passwordErros){
          if(passwordErros['required']){
            alert("Password is required!");
          }else if(passwordErros['minlength']){
            alert("Password must be at least 8 characters long!");
          }else if(passwordErros['pattern']){
            alert("Password cannot contain spaces!");
          }
        }
      }
      
    }
  }
}
