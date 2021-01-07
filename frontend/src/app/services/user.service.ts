import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb : FormBuilder, private http : HttpClient) { }

  readonly BaseURL = 'http://localhost:57367/api';

  formModel = this.fb.group({
    FirstName : ['', Validators.required],
    LastName : ['', Validators.required],
    Email : ['', [Validators.required, Validators.email]],
    Phone : ['', Validators.required],
    UserName : ['', Validators.required],
    Passwords : this.fb.group({
    Password : ['', [Validators.required, Validators.minLength(8)]],
    ConfirmPassword : ['', Validators.required]
    }, {validator : this.comparePasswords })
  });

  comparePasswords(fb : FormGroup) {
    let confirmPasswordCtrl = fb.get('ConfirmPassword');
    
    if(confirmPasswordCtrl?.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors) {
      if(fb.get('Password')?.value != confirmPasswordCtrl?.value)
        confirmPasswordCtrl?.setErrors({ passwordMismatch: true });
      else
        confirmPasswordCtrl?.setErrors(null);
    }
  }

  register() {
    var body = {
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Email: this.formModel.value.Email,
      Phone: this.formModel.value.Phone,
      UserName: this.formModel.value.UserName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURL + '/ApplicationUser/Register', body)
  }

  login(formData : NgForm) {
    return this.http.post(this.BaseURL + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer '+ localStorage.getItem('token') });
    return this.http.get(this.BaseURL + '/UserProfile', { headers : tokenHeader });
  }
}
