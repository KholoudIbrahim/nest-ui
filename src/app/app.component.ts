import { Component , OnInit} from '@angular/core';
import { EmpService } from './emp.service';

// import { Component,  } from '@angular/core';
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
// import { EmpService } from 'src/app/emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  constructor(private FB:FormBuilder ,
    private _AuthService:AuthService ,
    private _Router:Router ,
    private _EmpService:EmpService){}

  apiErrorMessage='';
  apiSuccess='';
  loginForm! : FormGroup;
  errMsg: string = '';

    isShowPassword:boolean = false;


  setIsShowPassword(){
    this.isShowPassword = !this.isShowPassword;
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


    initLoginForm():void
  {
    this.loginForm = this.FB.group({
      
      username: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(10)]],
    });
  }



    submitLoginForm():void 
  {
    // debugger
    console.log(this.loginForm);
    if(this.loginForm.valid)
      {

        this.callApi();
      
      }

  }

  callApi():void
  {
    this._EmpService.getEmployees().subscribe({
      next: (res)=> {
        console.log(res);
      }
    })
  

  }

  
// export class AppComponent {
//   title = 'userManagement';
//   value='';
//   task: string='';
//   amountInput!:number;
// constructor(private _EmpService:EmpService){}
//   userDetails = {
//     name:'',
//     email: ''
//   }
// ngOnInit(): void {
//   this._EmpService.getEmployees().subscribe((data) => {
//     console.log(data)
//     // this.task=data;
//   })
// }


  //submit
  // (amountInput):void{
    // debugger
    

    // console.log(form.value);
    // console.log(this['userDetails'])
  // }

}
