import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../entities/User';
import {Router} from '@angular/router';
import {LoginComponentService} from './login.component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public userLogin: User;

  public constructor(private loginService: LoginComponentService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onSubmit() {
    this.userLogin = new User(null, this.loginForm.get('username').value, this.loginForm.get('password').value);
    console.log(this.userLogin.username);
    console.log(this.userLogin.password);
    localStorage.setItem('username', this.userLogin.username);
    console.log('setat');
    console.log(localStorage.getItem('username'));

  }

  redirectFirstPage() {
    this.router.navigate(['/dashboard']);
  }

  onLogin() {
    this.userLogin = new User(null, this.loginForm.get('username').value, this.loginForm.get('password').value);
    console.log(this.userLogin.username);
    console.log(this.userLogin.password);
    localStorage.setItem('username', this.userLogin.username);
    console.log('setat');
    console.log(localStorage.getItem('username'));
    this.loginService.login(this.userLogin.username, this.userLogin.password);
  }

}
