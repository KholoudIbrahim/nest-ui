import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import {LoginPayload, empData} from 'src/app/features/auth/interfaces/auth.interface'
import { Router } from '@angular/router';
// router module

import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { EmpService } from 'src/app/emp.service';

// import {authInterface} from 'src/app/features/auth/interfaces/auth.interface.ts'
// import {authInterface} from 'src/app/features/auth/interfaces/auth.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent
{
  constructor(private FB:FormBuilder ,
    private _AuthService:AuthService ,
    private _Router:Router ,
    private _EmpService:EmpService){}

  apiErrorMessage='';
  apiSuccess='';
  // loginForm! : FormGroup;
  errMsg: string = '';
  emp:any[] = [];

  userID!:number;
  
  employeesData: any[] = [];

  isShowPassword:boolean = false;


  
  // loginForm is a property holds object i'll create (object of properties to be sent to backend)
  loginForm:FormGroup = new FormGroup({
    
    name: new FormControl( '' , [Validators.required] ),
    email: new FormControl( '' , [Validators.required , Validators.email] ),

  });

  handleForm():void 
  {
    // this.isLoading = true;
    const userData = this.loginForm.value;

    if(this.loginForm.valid == true )
    {
      // subscribe is the beginning of talking with API
      this._EmpService.login(userData).subscribe({
        // Checks if data is good
        next:(response)=>{
        // User successufully logged in 
        console.log(response);

        this.userID=response.id;
        console.log(this.userID);
          // if(response.message === "success")
          // {
            
            // this._Router.navigate(['/home'])
          // }
        },
        // Handling error(s)
        error:(err)=>{
          this.errMsg = err.error.message;
          // this.isLoading = false;

        }

      });
    }
    
  }
}
