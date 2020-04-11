import {Component, OnInit} from '@angular/core';


import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  public username: string;

  constructor(private router: Router) {
    this.username = localStorage.getItem('username');
  }


  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
