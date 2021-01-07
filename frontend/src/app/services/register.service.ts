import { Register } from './register.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  formData:Register = new  Register();
  readonly baseURL = 'http://localhost:57367/api/UserDetail'

  postRegister() {
    return this.http.post(this.baseURL, this.formData);
  }
}
