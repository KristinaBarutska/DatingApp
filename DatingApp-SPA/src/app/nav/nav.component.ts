import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = { };
  constructor(public authService: AuthService, private alerfity: AlertifyService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model).subscribe(next =>{
      this.alerfity.success('You logged in successfuly');
    }, error => {
      this.alerfity.error(error);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alerfity.message('You are logged out');
  }

}
