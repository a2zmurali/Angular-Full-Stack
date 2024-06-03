import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/Employess/employees-list/employees-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/Employess/add-employee/add-employee.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/Employess/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
