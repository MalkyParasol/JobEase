import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  checkUser(name:string,password:string)
  {
    return this.http.get<User>(`https://localhost:7016/JobSearch/user/${name}/${password}`);
  }
}
