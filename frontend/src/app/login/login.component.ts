import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName : '',
    Password : ''
  }

  constructor(
    private router: Router, private toastr: ToastrService,
    private service: UserService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/');
    }
  }

  onSubmit(f : NgForm) {
    this.service.login(f.value).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/');
        window.location.reload();
      },
      err => {
        if(err.status == 400)
          this.toastr.error('Invalid username and/or password!', 'Login failed');
        else
          console.log(err);
      }
    );
  }

}
