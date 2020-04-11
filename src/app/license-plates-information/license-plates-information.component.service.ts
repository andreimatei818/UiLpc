import {HttpClient} from '@angular/common/http';
import {GlobalServiceRequests} from '../GlobalService/GlobalServiceRequests';
import {Observable} from 'rxjs';
import {Parking} from '../entities/Parking';
import {Injectable} from '@angular/core';

@Injectable()
export class LicensePlatesInformationComponentService{
  baseURL = 'http://localhost:8082';

  constructor(private httpClient: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  getParkingDetailsByUser(): Observable<Array<Parking>> {
    return this.httpClient.get<Array<Parking>>(this.baseURL + '/getParking', {
      headers: this.globalServiceRequest.createAuthorizationHeader()}) ;
  }
}
