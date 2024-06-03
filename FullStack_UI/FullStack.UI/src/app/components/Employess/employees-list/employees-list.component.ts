import { Component, OnInit } from '@angular/core';
import { employee } from '../../../Modles/employee.model';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent implements OnInit {
  employees: employee[] = [];

  constructor(private employeeservice: EmployeeService) {}
  ngOnInit(): void {
    this.employeeservice.getAllEmployees().subscribe({
      next: (employees) => (this.employees = employees),
      error: (response) => console.log(response),
    });
    //this.employees.push();
  }
}
