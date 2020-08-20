import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = { };
  constructor(public authService: AuthService, private alerfity: AlertifyService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alerfity.success('You logged in successfuly');
    }, error => {
      this.alerfity.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  // tslint:disable-next-line: typedef
  loggedIn(){
    return this.authService.loggedIn();
  }

  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
    this.alerfity.message('You are logged out');
    this.router.navigate(['/home']);
  }

}
