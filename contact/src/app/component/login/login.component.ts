import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      username: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]

    })
  }

  get login_form_validate() { return this.loginForm.controls; }

  login(){

    if (this.loginForm.valid) {

        if(this.loginForm.value.username=='testuser@mail.com' && this.loginForm.value.password=='12345678'){

          sessionStorage.setItem('authToken',this.maketoken(32));

          this.router.navigateByUrl("/dashboard/contactList");
        
        }

    }
  }

  maketoken(length:any) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
}
