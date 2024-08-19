import { LoginPayload } from './../../features/auth/interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empData } from 'src/app/features/auth/interfaces/auth.interface';
import jwtDecode from 'jwt-decode';

// Observable
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  constructor(private _HttpClient:HttpClient) { }
// LoginPayload
  // login(payload:LoginPayload):Observable<LoginResponse>{
    // return this._HttpClient.post<LoginResponse>('https://dummyjson.com/auth/login',payload);
  }


// }
