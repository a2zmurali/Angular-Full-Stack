import { Component, OnInit } from '@angular/core';
import { employee } from '../../../Modles/employee.model';
import { EmployeeService } from '../../../Services/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  addemployeeRequest: employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private employeeservice: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  addemployee() {
    this.employeeservice.addEmployee(this.addemployeeRequest).subscribe({
      next: (employee) => this.router.navigate(['employees']),
    });
  }
}
