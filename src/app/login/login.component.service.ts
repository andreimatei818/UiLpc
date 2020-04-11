import {Injectable} from '@angular/core';
import {User} from '../entities/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ErrorMessageModel} from '../entities/errorMessageModel';
import {GlobalServiceRequests} from '../GlobalService/GlobalServiceRequests';
import {Router} from '@angular/router';


@Injectable()
export class LoginComponentService {
  private baseURL = 'http://localhost:8082';
  private user: User;
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  public errorOnLogin = new ErrorMessageModel();

  constructor(private httpClient: HttpClient, private globalServiceRequest: GlobalServiceRequests, private router: Router, private globalService: GlobalServiceRequests) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private userValueBase64: string = window.btoa('clientId:abcde');
  private httpHeaders: HttpHeaders = new HttpHeaders().append('Authorization', 'Basic ' + this.userValueBase64);

  public login(username: string, password: string) {
    sessionStorage.setItem('Username', username);
    this.obtainAccessToken(username, password).subscribe(
      data => {
        sessionStorage.setItem('accessToken', data.access_token);
        console.log(data);
        console.log(sessionStorage.getItem('accessToken'));
        this.getUserInformationsByToken().subscribe(userData => {
          this.user = userData;
          sessionStorage.setItem('userInfo', JSON.stringify(this.user));
          this.router.navigate(['dashboard']);
        }, error => {
          this.errorOnLogin = this.globalService.distplayErrorObject(error.error.message, true, error.error.status, 'alert-warning');
          alert('Username or password incorrect');
        });
      },
      error => {
        this.errorOnLogin = this.globalService.distplayErrorObject(error.error.message, true, error.error.status, 'alert-warning');
        alert('Username or password incorrect');
      } );
  }

  obtainAccessToken(username: string, password: string): Observable<any> {
    const authURL = this.baseURL + '/oauth/token?scope=write&grant_type=password&username=' + username + '&password=' + password;
    // const url = this.authURL;
    return this.httpClient.post(authURL, {}, {headers: this.httpHeaders});
  }

  getUserInformationsByToken(): Observable<User> {
    const url = this.baseURL + '/login';
    return this.httpClient.get<User>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

}
