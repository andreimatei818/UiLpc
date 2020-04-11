import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material/sort';
import {LicensePlatesInformationComponentService} from './license-plates-information.component.service';
import {Parking} from '../entities/Parking';

@Component({
  selector: 'app-license-plates-information',
  templateUrl: './license-plates-information.component.html',
  styleUrls: ['./license-plates-information.component.css']
})
export class LicensePlatesInformationComponent implements OnInit {


  constructor(private licenseService: LicensePlatesInformationComponentService) {
    this.sortedDataParking = this.parkingList.slice();
  }

  sortedDataParking: Parking[];

  private parkingList: Array<Parking> = [];


  ngOnInit() {
    this.getParking();
    this.parkingList = this.getParking();
    this.sortedDataParking = this.getParking();
  }

  sortData(sort: Sort) {
    const data = this.parkingList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedDataParking = data;
      return;
    }

    this.sortedDataParking = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'carNumber':
          return compare(a.carNumber, b.carNumber, isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        default:
          return 0;
      }
    });
  }

  getParking(): Array<Parking> {
    this.licenseService.getParkingDetailsByUser().subscribe(value => {
      this.parkingList = value;

    });
    return this.parkingList;
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
