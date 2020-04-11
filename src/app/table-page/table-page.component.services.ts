import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Parking} from '../entities/Parking';
import {GlobalServiceRequests} from '../GlobalService/GlobalServiceRequests';


@Injectable()
export class TableSearchComponentServices {

  baseURL = 'http://localhost:8082';

  constructor(private httpClient: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  getParkingDetailsByUser(): Observable<Array<Parking>> {
    return this.httpClient.get<Array<Parking>>(this.baseURL + '/getParking', {
      headers: this.globalServiceRequest.createAuthorizationHeader()}) ;
  }
}
