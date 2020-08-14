import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private authService: AuthService){ }
  ngOnInit() {
    console.log('Init called!')
    const token = (localStorage.getItem('token'));
    if (token){
      this.decodedToken = this.jwtHelper.decodeToken(token);
      console.log(this.decodedToken);
    }

  }
}
