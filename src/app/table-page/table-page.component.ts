import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Parking} from '../entities/Parking';
import {TableSearchComponentServices} from './table-page.component.services';
import {Food} from '../entities/Food';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePAgeComponent implements OnInit {

  constructor(private tableService: TableSearchComponentServices) {
  }

  public parkingList: Array<Parking> = new Array<Parking>();
  private username: string;

  public dataSource: Food [] = [
    {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];
  displayedColumns: string[] = ['Id', 'Date', 'Car Number'];

  ngOnInit() {
    this.getParking();
  }

  getParking() {
    this.tableService.getParkingDetailsByUser().subscribe(value => {
      // debugger;
      this.parkingList = value;
    });
  }
}

