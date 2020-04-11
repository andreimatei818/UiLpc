import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-line',
  templateUrl: './menu-line.component.html',
  styleUrls: ['./menu-line.component.css']
})
export class MenuLineComponent implements OnInit {
  public username: string;

  constructor(private router: Router) {
    this.username = localStorage.getItem('username');
  }


  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
    sessionStorage.clear();
  }

  ngOnInit() {
  }

}
