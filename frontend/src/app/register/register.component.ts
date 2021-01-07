import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
    if(localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/');
    }
  }

  onSubmit() {
    this.service.register().subscribe(
      (res : any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('Registered successfully!', 'New User');
          this.router.navigateByUrl('/');
        } else {
          res.errors.forEach((element:any) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken!','Failed to create new user');
                break;
              default:
                this.toastr.error(element.description, 'Failed to create new user');
                break;
            }
          })
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
