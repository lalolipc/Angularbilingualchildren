/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupAsyncService {

  constructor() { }
}
*/

//student.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupAsyncService {
  private apiURL = 'https://message-demo-boot.herokuapp.com/sign-up'
  constructor(private http: HttpClient) { }
  
  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

  getById(studentId: number): Promise<any>{
    console.log(this.apiURL + studentId);
    return this.http.get(this.apiURL + '/' + studentId)
      .toPromise();
  }

  add(user: User): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post(this.apiURL, user, httpOptions)
      .toPromise();
  }
}
