import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LogoutService {
  private baseURL = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {
  }

  public logout(): Observable<any> {
    // localStorage.clear();
    // debugger;
    // const httpHeaderToken: HttpHeaders = new HttpHeaders().append('Authorization', localStorage.getItem('token'));
    // return this.http.post<any>(this.baseURL + '/logout', null, {
    //   headers: httpHeaderToken,
    //   responseType: 'json'
    // });
    return null;
  }

}
