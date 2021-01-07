import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  loggedIn: boolean = (localStorage.getItem('token') != null)

  userDetail: any;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.userDetail = res;
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    window.location.reload();
  }

}
