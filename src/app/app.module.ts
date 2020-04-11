import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponentService} from './login/login.component.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {TablePAgeComponent} from './table-page/table-page.component';
import {GlobalServiceRequests} from './GlobalService/GlobalServiceRequests';
import {TableSearchComponentServices} from './table-page/table-page.component.services';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {HeaderComponent} from './header/header.component';
import {MenuUserComponent} from './menu-user/menu-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MenuLineComponent} from './menu-line/menu-line.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergyComponent } from './energy/energy.component';
import { RobertComponent } from './robert/robert.component';
import { TablePageSortedComponent } from './table-page-sorted/table-page-sorted.component';
import {MatSortModule} from '@angular/material/sort';
import { LicensePlatesInformationComponent } from './license-plates-information/license-plates-information.component';
import {LicensePlatesInformationComponentService} from './license-plates-information/license-plates-information.component.service';
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'table', component: TablePAgeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'energy', component: EnergyComponent},
  {path: 'menu', component: MenuLineComponent},
  {path: 'table-sort', component: TablePageSortedComponent},
  {path: 'license-plates-table', component: LicensePlatesInformationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablePAgeComponent,
    HeaderComponent,
    MenuUserComponent,
    MenuLineComponent,
    DashboardComponent,
    EnergyComponent,
    RobertComponent,
    TablePageSortedComponent,
    LicensePlatesInformationComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FontAwesomeModule,
  ],
  providers: [
    LoginComponentService,
    GlobalServiceRequests,
    TableSearchComponentServices,
    LicensePlatesInformationComponentService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
