import {LoginPayload, empData} from 'src/app/features/auth/interfaces/auth.interface'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmpService {
  host = 'http://localhost:4000/employees';
  // host = 'https://console.neon.tech/app/projects/small-cell-69529283/branches/br-round-water-a5r7hqtz/tables?database=customers';

  constructor(private http: HttpClient) { }

  getEmployees():Observable<any> {
    return this.http.get<any>(`${this.host}`);
  }

    // // Method bttklm m3 el api
    // login(userData:object):Observable<any> {
    //   return this.http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , userData )
    // }
    // Method bttklm m3 el api
    login(userData:object):Observable<any> {
      return this.http.post(`http://localhost:4000/auth/login` , userData )
    }
  
}
